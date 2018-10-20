using System.Collections.Generic;

namespace Models.ViewModels
{
    public class ScoreInfoViewModel
    {
        public int Score { get; set; }
        
        public Dictionary<string, int> ScoreBoard { get; set; }
    }
}