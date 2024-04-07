using DotNetAPI.Models;
using System.Threading.Tasks;

namespace DotNetAPI.Interfaces
{
    public interface IUserRepository
    {
        Task<bool> UserExists(string username);
        Task<bool> RegisterUser(User user);
        Task<User> GetUserByUsername(string username);
        Task<string> AuthenticateUser(string username, string password);
    }
}
