using System.Linq;
using System.Threading.Tasks;
using Logic.Interfaces;
using Models;
using Models.ViewModels;

namespace Logic
{
    public class ScoreLogic : IScoreLogic
    {
        private readonly IUserLogic _userLogic;

        public ScoreLogic(IUserLogic userLogic)
        {
            _userLogic = userLogic;
        }

        /// <summary>
        /// Sets the user score given an offset
        /// </summary>
        /// <param name="user"></param>
        /// <param name="offset"></param>
        /// <returns></returns>
        public async Task<bool> SetScore(User user, int offset)
        {
            return await _userLogic.Update(user.Id, entity => { entity.Score += offset; }) != null;
        }

        /// <summary>
        /// Returns score info
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public async Task<ScoreInfoViewModel> ScoreInfo(User user)
        {
            return new ScoreInfoViewModel
            {
                Score = (await _userLogic.Get(user.Id)).Score,
                ScoreBoard = (await _userLogic.GetAll()).ToDictionary(x => x.Fullname, x => x.Score)
            };
        }
    }
}