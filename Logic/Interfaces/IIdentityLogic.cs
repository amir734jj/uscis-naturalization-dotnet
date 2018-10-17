using System.Threading.Tasks;
using Models;
using Models.ViewModels;

namespace Logic.Interfaces
{
    public interface IIdentityLogic
    {        
        Task<bool> Register(RegisterViewModel user);

        Task<SessionPayload> Login(LoginViewModel loginViewModel);

        Task<bool> Logout(SessionPayload sessionPayload);

        Task<bool> IsAuthenticated(SessionPayload sessionPayload);

        Task<User> SessionInfoToUser(SessionPayload sessionPayload);
    }
}