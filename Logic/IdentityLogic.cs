using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Logic.Interfaces;
using Models;
using Models.ViewModels;
using static Logic.Utilities.HashingUtility;

namespace Logic
{
    public class IdentityLogic : IIdentityLogic
    {
        private readonly IUserLogic _userLogic;
        private readonly ConcurrentDictionary<string, string> _authenticatedUsers;
        private readonly IMapper _mapper;

        /// <summary>
        /// Constructor dependency injection
        /// </summary>
        /// <param name="userLogic"></param>
        /// <param name="identityDictionary"></param>
        /// <param name="mapper"></param>
        public IdentityLogic(IUserLogic userLogic, IIdentityDictionary identityDictionary, IMapper mapper)
        {
            _userLogic = userLogic;
            _authenticatedUsers = identityDictionary.AuthenticatedUsers;
            _mapper = mapper;
        }

        /// <summary>
        /// Registers a user
        /// </summary>
        /// <param name="registerViewModel"></param>
        public async Task<bool> Register(RegisterViewModel registerViewModel)
        {
            // Nothing needs to be done
            if (registerViewModel == null)
            {
                return false;
            }

            var info = _mapper.Map<RegisterViewModel, User>(registerViewModel, RegisterModelConfigureMap);
            
            var user = await _userLogic.Save(info);

            return user != null;
        }

        /// <summary>
        /// Authenticates a user
        /// </summary>
        /// <param name="loginViewModel"></param>
        public async Task<SessionPayload> Login(LoginViewModel loginViewModel)
        {
            // Nothing needs to be done
            if (loginViewModel == null)
            {
                return null;
            }

            var (username, password) = (loginViewModel.Username, loginViewModel.Password);
            
            // Try to get the user
            var users = await _userLogic.GetAll();
            var user = users.FirstOrDefault(x => x.Username == username && x.Password == SecureHashPassword(password));
            
            // Authenticate the user
            if (user != null)
            {
                _authenticatedUsers[username] = SecureHashPassword(password);

                // Out the flag
                return new SessionPayload
                {
                    Username = user.Username,
                    PasswordHash = _authenticatedUsers[username]
                };
            }

            return null;
        }

        /// <summary>
        /// Log out the user
        /// </summary>
        /// <param name="sessionPayload"></param>
        public async Task<bool> Logout(SessionPayload sessionPayload)
        {
            // Nothing needs to be done
            if (sessionPayload == null)
            {
                return false;
            }

            var (username, _) = (sessionPayload.Username, sessionPayload.PasswordHash);
            
            // Authenticate the user
            if (_authenticatedUsers.ContainsKey(username))
            {
                _authenticatedUsers.Remove(username, out _);

                // Out the flag
                return true;
            }
            
            return false;
        }

        /// <summary>
        /// Checks whether user is authenticated or not
        /// </summary>
        /// <param name="sessionPayload"></param>
        /// <returns></returns>
        public async Task<bool> IsAuthenticated(SessionPayload sessionPayload)
        {
            // Nothing needs to be done
            if (sessionPayload == null)
            {
                return false;
            }

            var (username, passwordHash) = (sessionPayload.Username, sessionPayload.PasswordHash);

            return await Task.FromResult(_authenticatedUsers.Any(x => x.Key == username && x.Value == passwordHash));
        }

        public async Task<User> SessionInfoToUser(SessionPayload sessionPayload)
        {
            var users = await _userLogic.GetAll();
            
            var user = users.FirstOrDefault(x => x.Username == sessionPayload.Username && x.Password == sessionPayload.PasswordHash);

            return user;
        }

        /// <summary>
        /// Configure mapper
        /// </summary>
        /// <param name="opt"></param>
        private static void RegisterModelConfigureMap(IMappingOperationOptions<RegisterViewModel, User> opt)
        {
            opt.ConfigureMap()
                .ForMember(x => x.Id, x => x.Ignore())
                .ForMember(x => x.Score, x => x.Ignore());
        }
    }
}