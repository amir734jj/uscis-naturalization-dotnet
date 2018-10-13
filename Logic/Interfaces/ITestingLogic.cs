using System.Threading.Tasks;
using Models;

namespace Logic.Interfaces
{
    public interface ITestingLogic
    {
        Task<bool> SetScore(User user, int offset);
    }
}