using System;
using System.ComponentModel.DataAnnotations;

namespace DotNetAPI.Models
{
    public class CommentPost
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Postname { get; set; }
        public string Comment { get; set; }
        public DateTime Time { get; set; }
    }
}
