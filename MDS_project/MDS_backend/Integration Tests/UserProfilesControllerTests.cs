using MDS_backend;
using MDS_backend.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Data.SqlClient;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;


namespace Integration_Tests
{
    [TestClass]
    public class UserProfilesControllerTests
    {
        private static WebApplicationFactory<Startup> _factory;

        [ClassInitialize]
        public static void ClassInit(TestContext testContext)
        {
            _factory = new WebApplicationFactory<Startup>().WithWebHostBuilder(builder =>
                       builder.UseSetting("https_port", "5001").UseEnvironment("Testing"));
        }


        [TestMethod]
        public async Task TestGetAllUserProfiles()
        {
            var client = _factory.CreateClient();

            string connectionString = @"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            string count = "SELECT COUNT(UserId) FROM UserProfiles;";
            SqlCommand cmd = new SqlCommand(count, conn);
            int nr = Convert.ToInt32(cmd.ExecuteScalar().ToString());

            var response = await client.GetAsync("api/userProfiles");
            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

            var json = await response.Content.ReadAsStringAsync();
            var profiles = JsonConvert.DeserializeObject<List<UserProfile>>(json);
            if (profiles != null)
                Assert.AreEqual(profiles.Count, nr);
            else
                Assert.AreEqual(0, nr);
            conn.Close();
        }


        [TestMethod]
        public async Task TestGetUserProfileByUsername()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("api/userProfiles/getByOwnerUsername/musician1");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

            var json = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("{\"userId\":3,\"owner\":{\"userId\":3,\"email\":\"email_1@yahoo.com\",\"password\":\"12345\",\"username\":\"musician1\"},"
                +"\"phone\":\"1234567890\",\"firstName\":\"Lucas\",\"lastName\":\"Jackson\",\"age\":22,\"occupation\":\"Student\",\"trait1\":\"Level-headed\",\"trait2\":\"Organized\","
                +"\"canSing\":false,\"playedInstrument\":\"Bass Guitar\",\"preferredMusicGenre\":\"Pop\",\"address\":{\"userId\":3,\"country\":\"France\",\"city\":\"Paris\",\"street\":null},\"bandId\":2,\"band\":null,\"bandAndUserMatches\":null}", json);
        }


        [ClassCleanup]
        public static void ClassCleanup()
        {
            _factory.Dispose();
        }
    }
}
