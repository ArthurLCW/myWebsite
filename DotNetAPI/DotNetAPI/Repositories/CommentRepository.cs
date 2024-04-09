using DotNetAPI.Interfaces;
using DotNetAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace DotNetAPI.Repositories
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateComment(CommentPost comment, string authenticatedName)
        {
            var newComment = new CommentPost
            {
                Username = authenticatedName,
                Postname = comment.Postname,
                Comment = comment.Comment,
                Time = DateTime.UtcNow
            };
            _context.Comments.Add(newComment);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> DeleteComment(int commentId, string username)
        {
            var comment = await _context.Comments.FirstOrDefaultAsync(c => c.Id == commentId && c.Username == username);
            if (comment == null)
            {
                return false;
            }

            _context.Comments.Remove(comment);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<CommentPost>> GetCommentsByPostName(string postName)
        {
            return await _context.Comments
                                 .Where(c => c.Postname == postName)
                                 .OrderBy(c => c.Time)
                                 .ToListAsync();
        }
    }
}
