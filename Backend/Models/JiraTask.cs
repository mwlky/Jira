using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace DG.Jira.Backend.Models
{
    public class JiraTask
    {
        [Key] public int Id { get; init; }
        public required string Type { get; set; }
        public required string Title { get; set; }
        public required string Priority { get; set; }
        public required string DroppableId { get; set; }

        public required string UserId { get; init; }
        public IdentityUser User { get; init; }
    }
}