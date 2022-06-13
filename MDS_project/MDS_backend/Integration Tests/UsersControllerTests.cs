using MDS_backend;
using MDS_backend.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Data.SqlClient;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Integration_Tests
{
    [TestClass]
    public class UsersControllerTests
    {
        private static WebApplicationFactory<Startup> _factory;

        [ClassInitialize]
        public static void ClassInit(TestContext testContext)
        {
            _factory = new WebApplicationFactory<Startup>().WithWebHostBuilder(builder =>
                       builder.UseSetting("https_port", "5001").UseEnvironment("Testing"));
        }


        [TestMethod]
        public async Task TestGetUserByUsername()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("api/users/getByUsername/rockLover");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

            var json = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("{\"userId\":2,\"email\":\"user-email@yahoo.eu\",\"password\":\"parola99\",\"username\":\"rockLover\",\"profile\":null}", json);
        }


        [TestMethod]
        public async Task TestGetUserByEmail()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("api/users/getByEmail/user_email@gmail.com");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

            var json = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("{\"userId\":6,\"email\":\"user_email@gmail.com\",\"password\":\"12345\",\"username\":\"WebsiteUser\",\"profile\":null}", json);
        }


        [TestMethod]
        public async Task TestCreateAndDeleteUser()
        {
            var client = _factory.CreateClient();

            var newUser = new User { Email = "test-email",
                Password = "test password", Username = "test-username"
            };

            var httpContent = new StringContent(JsonConvert.SerializeObject(newUser), System.Text.Encoding.UTF8, "application/json");

            string connectionString = @"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            string getId = "SELECT IDENT_CURRENT('dbo.Users');";
            SqlCommand cmd = new SqlCommand(getId, conn);
            int id = Convert.ToInt32(cmd.ExecuteScalar().ToString());

            var response1 = await client.PostAsync("api/users", httpContent);
            Assert.AreEqual(HttpStatusCode.OK, response1.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response1.Content.Headers.ContentType?.ToString());

            var newId = Convert.ToInt32(await response1.Content.ReadAsStringAsync());
            Assert.AreEqual(newId, id+1);

            var response2 = await client.DeleteAsync("api/users/"+newUser.Email);
            Assert.AreEqual(HttpStatusCode.OK, response2.StatusCode);

            string setId = "DBCC CHECKIDENT('Users', RESEED, "+id+");";
            new SqlCommand(setId, conn).ExecuteScalar();
            conn.Close();
        }


        [TestMethod]
        public async Task TestEditUser()
        {
            var user = new User
            {
                UserId = 7,
                Email = "testing1",
                Password = "55555",
                Username = "testUsername"
            };

            var client = _factory.CreateClient();

            var httpContent = new StringContent(JsonConvert.SerializeObject(user), System.Text.Encoding.UTF8, "application/json");

            var response = await client.PutAsync("api/users", httpContent);

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
        }


        [ClassCleanup]
        public static void ClassCleanup()
        {
            _factory.Dispose();
        }
    }
}