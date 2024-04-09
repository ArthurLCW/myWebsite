using Microsoft.AspNetCore.Mvc;
using DotNetAPI.Models;
using DotNetAPI.Interfaces;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace DotNetAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;
        private readonly IConfiguration _configuration;
        private readonly AuthenticationService _authenticationService;

        public CommentController(ICommentRepository commentRepository, IConfiguration configuration, AuthenticationService authenticationService)
        {
            _commentRepository = commentRepository;
            _configuration = configuration;
            _authenticationService = authenticationService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CommentPost comment)
        {
            string authenticatedName = "Visitor";
            var token = Request.Cookies["access_token"];
            try
            {
                authenticatedName = _authenticationService.GetUserByToken(token);
            }
            catch
            {
                return BadRequest("Authentication NOT valid!");
            }

            await _commentRepository.CreateComment(comment, authenticatedName);

            return Ok(comment);
        }

        [HttpDelete("comment")]
        public async Task<IActionResult> DeleteComment(int commentId, string username)
        {
            var token = Request.Cookies["access_token"];
            if (string.IsNullOrEmpty(token))
            {
                return BadRequest("Authentication NOT exist!");
            }

            string authenticatedName;
            try
            {
                authenticatedName = _authenticationService.GetUserByToken(token);
            }
            catch
            {
                return BadRequest("Authentication NOT valid!");
            }

            if (authenticatedName != username)
            {
                return BadRequest("DO NOT TRY TO DELETE OTHERS' COMMENT!");
            }

            var result = await _commentRepository.DeleteComment(commentId, authenticatedName);
            if (!result)
            {
                return StatusCode(500, "Failed to delete post");
            }

            return Ok(new { success = true });
        }

        [HttpGet("{postName}")]
        public async Task<IActionResult> GetCommentsByPostName(string postName)
        {
            var comments = await _commentRepository.GetCommentsByPostName(postName);
            if (comments == null)
            {
                return NotFound();
            }
            return Ok(comments);
        }

    }
}
