using System;
using System.ComponentModel.DataAnnotations;
using Models.Interfaces;

namespace Models
{
    public class User : IBasicModel
    {
        [Key]
        public int Id { get; set; }
        
        public string Fullname { get; set; }
        
        public string Email { get; set; }
        
        public string Username { get; set; }
        
        public string Password { get; set; }
        
        public int Score { get; set; }
    }
}