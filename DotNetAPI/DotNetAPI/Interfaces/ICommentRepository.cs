using DotNetAPI.Models;
using System.Threading.Tasks;

namespace DotNetAPI.Interfaces
{
    public interface ICommentRepository
    {
        Task CreateComment(CommentPost comment, string authenticatedName);
        Task<bool> DeleteComment(int commentId, string username);
        Task<List<CommentPost>> GetCommentsByPostName(string postName);


    }
}
