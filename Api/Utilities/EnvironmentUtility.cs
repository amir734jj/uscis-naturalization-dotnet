using System;

namespace API.Utilities
{
    public static class EnvironmentUtility
    {
        /// <summary>
        /// Returns environment variable if any
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string GetEnvironmentVariableOrDefault(string key)
        {
            try
            {
                return Environment.GetEnvironmentVariable(key);
            }
            catch (Exception)
            {
                return string.Empty;
            }
        }
    }
}