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
using System.Net.Http;
using System.Threading.Tasks;

namespace Integration_Tests
{
    [TestClass]
    public class MusicalBandsControllerTests
    {
        private static WebApplicationFactory<Startup> _factory;

        [ClassInitialize]
        public static void ClassInit(TestContext testContext)
        {
            _factory = new WebApplicationFactory<Startup>().WithWebHostBuilder(builder =>
                       builder.UseSetting("https_port", "5001").UseEnvironment("Testing"));
        }


        [TestMethod]
        public async Task TestGetBandById()
        {
            var client = _factory.CreateClient();
            var response = await client.GetAsync("api/musicalBands/1");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response.Content.Headers.ContentType?.ToString());

            var json = await response.Content.ReadAsStringAsync();
            Assert.AreEqual("{\"bandId\":1,\"name\":\"The Eagles\",\"musicGenre\":\"Rock\",\"dateFormed\":\"2021-11-03T00:00:00\",\"isComplete\":false,"
                +"\"hq\":{\"bandId\":1,\"country\":\"USA\",\"city\":\"Chicago\",\"address\":\"Michigan Avenue\",\"squareMeters\":38},\"members\":null,\"bandAndUserMatches\":null}", json);
        }


        [TestMethod]
        public async Task TestCreateAndDeleteBandMatches()
        {
            var client = _factory.CreateClient();

            List<BandAndUserMatch> matches = new List<BandAndUserMatch>();
            matches.Add(new BandAndUserMatch { BandId = 2, UserId = 6, Type = "invitation" });
            matches.Add(new BandAndUserMatch { BandId = 2, UserId = 4, Type = "survey match" });

            var httpContent = new StringContent(JsonConvert.SerializeObject(matches), System.Text.Encoding.UTF8, "application/json");

            string connectionString = @"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            string count = "SELECT COUNT(*) FROM BandAndUserMatches WHERE BandId = 2;";
            SqlCommand cmd = new SqlCommand(count, conn);
            int nr = Convert.ToInt32(cmd.ExecuteScalar().ToString());

            var response1 = await client.PostAsync("api/musicalBands/bandAndUserMatches", httpContent);
            Assert.AreEqual(HttpStatusCode.OK, response1.StatusCode);

            var response2 = await client.GetAsync("api/musicalBands/2/matchedUserProfiles");
            Assert.AreEqual(HttpStatusCode.OK, response2.StatusCode);
            Assert.AreEqual("application/json; charset=utf-8", response2.Content.Headers.ContentType?.ToString());

            var json = await response2.Content.ReadAsStringAsync();
            var bandMatches = JsonConvert.DeserializeObject<List<UserProfile>>(json);
            Assert.AreEqual(bandMatches!.Count, nr+2);

            foreach (BandAndUserMatch match in matches)
            {
                var response3 = await client.DeleteAsync("api/musicalBands/bandAndUserMatch/" + match.BandId+"/"+match.UserId);
                Assert.AreEqual(HttpStatusCode.OK, response3.StatusCode);
            }

            conn.Close();
        }


        [ClassCleanup]
        public static void ClassCleanup()
        {
            _factory.Dispose();
        }
    }
}