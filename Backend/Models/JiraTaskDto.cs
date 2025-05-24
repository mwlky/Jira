namespace DG.Jira.Backend.Models
{
    public class JiraTaskDto
    {
        public required string Type { get; set; }
        public required string Title { get; set; }
        public required string Priority { get; set; }
        public required string DroppableId { get; set; }
    }
}