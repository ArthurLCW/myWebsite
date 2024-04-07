using Microsoft.AspNetCore.Mvc;
using DotNetAPI.Models;
using DotNetAPI.Interfaces;
using System.Threading.Tasks;

namespace DotNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly AuthenticationService _authenticationService;

        public UsersController(IUserRepository userRepository, AuthenticationService authenticationService)
        {
            _userRepository = userRepository;
            _authenticationService = authenticationService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user.Username.Equals("Visitor", StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest("You cannot use 'Visitor' as the username.");
            }

            if (await _userRepository.UserExists(user.Username))
            {
                return BadRequest("Username already exists.");
            }

            var registered = await _userRepository.RegisterUser(user);
            if (registered)
            {
                return Ok("User registered successfully.");
            }
            else
            {
                return BadRequest("User could not be registered.");
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User userLogin)
        {
            var token = await _userRepository.AuthenticateUser(userLogin.Username, userLogin.Password);
            if (string.IsNullOrEmpty(token))
            {
                return BadRequest("Username/password error.");
            }

            Response.Cookies.Append("access_token", token, new CookieOptions
            {
                HttpOnly = true, // Prevents access to the cookie via client-side script
                Secure = true,   // Ensures the cookie is sent over HTTPS
                SameSite = SameSiteMode.Strict // Controls when cookies are sent with requests from external sites
            });

            return Ok(new { Username = userLogin.Username });
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("access_token", new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.None
            });

            return Ok("User has been logged out.");
        }


    }
}
