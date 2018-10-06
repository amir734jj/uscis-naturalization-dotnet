using Newtonsoft.Json;

namespace Models.ViewModels
{
    public class Auth0TokenResponse
    {
        [JsonProperty("access_token")]
        public string AccesToken { get; set; }
        
        [JsonProperty("expires_in")]
        public long ExpiresIn { get; set; }
        
        [JsonProperty("scope")]
        public string Scope { get; set; }
        
        [JsonProperty("token_type")]
        public string TokenType { get; set; }
    }
}