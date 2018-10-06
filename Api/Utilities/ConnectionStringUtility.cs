﻿using System;

namespace API.Utilities
{
    public static class SqlConnectionStringUtility
    {
        /// <summary>
        /// Converts connection string url to resource
        /// </summary>
        /// <param name="connectionStringUrl"></param>
        /// <returns></returns>
        public static string ConnectionStringUrlToResource(string connectionStringUrl)
        {
            var isUrl = Uri.TryCreate(connectionStringUrl, UriKind.Absolute, out var url);

            var connectionUrl =
                $@"host={url.Host};
                   username={url.UserInfo.Split(':')[0]};
                   password={url.UserInfo.Split(':')[1]};
                   database={url.LocalPath.Substring(1)};
                   pooling=true;
                   SSL Mode=Require;
                   Trust Server Certificate=true;
                ";
            
            return isUrl ? connectionUrl : string.Empty;
        }
    }
}