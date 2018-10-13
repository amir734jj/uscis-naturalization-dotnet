using System;
using System.Collections.Generic;

namespace Models.Constants
{
    public static class ApiConstants
    {
        public const string AuthenticationSessionCookieName = "AuthenticationCookie";
        
        /// <summary>
        /// Authenticated token
        /// </summary>
        public static readonly KeyValuePair<string, string> Authenticated
            = new KeyValuePair<string, string>("Authenticated", Guid.NewGuid().ToString());
        
        public const string Username = "Username";

        public const string PasswordHash = "PasswordHash";
        
        public const string WebSiteUrl = "https://uscis-naturalization.herokuapp.com";
        
        public const string WebSiteApiUrl = "https://uscis-naturalization.herokuapp.com/api";
    }
}