using Models.ViewModels;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using RestSharp;

namespace API.Utilities
{
    public static class Auth0TokenUtility
    {
        /// <summary>
        /// Returns management access token
        /// </summary>
        /// <param name="domain"></param>
        /// <param name="clientId"></param>
        /// <param name="clientSecret"></param>
        /// <returns></returns>
        public static string GetAuth0ManagementToken(string domain, string clientId, string clientSecret)
        {
            var client = new RestClient($"https://{domain}/oauth/token");

            var request = new RestRequest(Method.POST)
                .AddBody(JsonConvert.SerializeObject(new
                {
                    GrantType = "client_credentials",
                    ClientId = clientId,
                    ClientSecret = clientSecret,
                    Audience = $"https://{domain}/api/v2/"

                }, new JsonSerializerSettings
                {
                    ContractResolver = new DefaultContractResolver {NamingStrategy = new SnakeCaseNamingStrategy()},
                }))
                .AddHeader("content-type", "application/json");

            var response = client.Post<Auth0TokenResponse>(request);

            return response.Data.AccesToken;
        }
    }
}