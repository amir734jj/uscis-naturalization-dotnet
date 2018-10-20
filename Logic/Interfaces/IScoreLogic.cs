using System.Threading.Tasks;
using Models;
using Models.ViewModels;

namespace Logic.Interfaces
{
    public interface IScoreLogic
    {
        Task<bool> SetScore(User user, int offset);

        Task<ScoreInfoViewModel> ScoreInfo(User user);
    }
}