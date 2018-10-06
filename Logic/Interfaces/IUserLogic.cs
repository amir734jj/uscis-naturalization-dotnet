using System.Threading.Tasks;
using Models;

namespace Logic.Interfaces
{
    public interface IUserLogic : IBasicCrudLogic<User>
    {
        Task<bool> SetScore(int id, int offset);
    }
}