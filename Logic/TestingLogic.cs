using System.Threading.Tasks;
using Logic.Interfaces;
using Models;

namespace Logic
{
    public class TestingLogic : ITestingLogic
    {
        private readonly IUserLogic _userLogic;

        public TestingLogic(IUserLogic userLogic)
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
    }
}