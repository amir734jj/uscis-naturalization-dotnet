using System.Linq;
using Microsoft.AspNetCore.Http;
using Models.Constants;
using Models.ViewModels;

namespace API.Extensions
{
    public static class SessionExtension
    {
        /// <summary>
        /// Extension method to quickly get the username/password
        /// </summary>
        /// <param name="session"></param>
        /// <returns></returns>
        public static SessionPayload GetUserInfo(this ISession session)
        {
            if (session == null || !session.IsAvailable || !session.Keys.Contains(ApiConstants.Username) || !session.Keys.Contains(ApiConstants.PasswordHash))
            {
                return null;
            }
            
            return new SessionPayload
            {
                Username = session.GetString(ApiConstants.Username),
                PasswordHash = session.GetString(ApiConstants.PasswordHash)
            };
        }
    }
}