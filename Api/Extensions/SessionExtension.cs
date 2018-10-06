using Microsoft.AspNetCore.Http;
using Models.Constants;

namespace API.Extensions
{
    /// <summary>
    /// UserInfo Struct
    /// </summary>
    public struct UserInfo
    {
        public string Username { get; set; }
        
        public string Password { get; set; }
    }
    
    public static class SessionExtension
    {
        /// <summary>
        /// Extension method to quickly get the username/password
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        public static UserInfo GetUserInfo(this ISession session)
        {            
            return new UserInfo
            {
                Username = session.GetString(ApiConstants.Username),
                Password = session.GetString(ApiConstants.Password)
            };
        }

        /// <summary>
        /// Extension method to check whether user is logged in or not
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        public static bool IsAuthenticated(this ISession session) => session.GetString(ApiConstants.Authenticated.Key) == ApiConstants.Authenticated.Value;
    }
}