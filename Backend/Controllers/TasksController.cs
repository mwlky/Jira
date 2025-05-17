namespace DG.Jira.Backend.Controllers
{
    using Data;
    using Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Authorization;
    using backend.Models;

    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ILogger<TasksController> _logger;
        private readonly ApplicationDbContext _context;

        public TasksController(ApplicationDbContext applicationDbContext, ILogger<TasksController> logger)
        {
            _logger = logger;
            _context = applicationDbContext;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<JiraTask> GetTasks()
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            System.Console.WriteLine($"UserId? {userId}");

            if (userId == null)
                return Enumerable.Empty<JiraTask>();

            IEnumerable<JiraTask> tasks = _context.Tasks
                .Where(t => t.UserId == userId);

            return tasks;
        }

        [HttpPost]
        [Authorize]
        public IActionResult AddTask([FromBody] JiraTaskDto dto)
        {
            string? userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (userId == null)
                return Unauthorized();

            JiraTask newTask = new JiraTask
            {
                UserId = userId,
                Id = (int)DateTimeOffset.UtcNow.ToUnixTimeMilliseconds(),
                Type = dto.Type,
                Title = dto.Title,
                Priority = dto.Priority,
                DroppableId = dto.DroppableId
            };

            _context.Tasks.Add(newTask);
            _context.SaveChanges();

            return Ok(newTask);
        }

        [Authorize]
        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, [FromBody] JiraTaskDto updatedTaskDto)
        {
            JiraTask? existingTask = _context.Tasks
                .FirstOrDefault(x => x.Id == id);

            if (existingTask == null)
                return NotFound();

            existingTask.Title = updatedTaskDto.Title;
            existingTask.DroppableId = updatedTaskDto.DroppableId;
            existingTask.Type = updatedTaskDto.Type;
            existingTask.Priority = updatedTaskDto.Priority;

            _context.SaveChanges();

            return Ok(existingTask);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
            JiraTask? taskToRemove = _context.Tasks
                .FirstOrDefault(x => x.Id == id);

            if (taskToRemove == null)
                return NotFound();

            _context.Tasks.Remove(taskToRemove);
            _context.SaveChanges();

            return Ok();
        }

        [Authorize]
        [HttpGet("me")]
        public IActionResult Me()
        {
            return Ok(new
            {
                User.Identity.Name,
                IsAuthenticated = User.Identity.IsAuthenticated,
                Claims = User.Claims.Select(c => new { c.Type, c.Value })
            });
        }
    }
}