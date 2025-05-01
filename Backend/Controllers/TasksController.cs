namespace DG.Jira.Backend.Controllers
{

    using Models;
    using DG.Jira.Backend.Data;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public TasksController(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        [HttpGet]
        public IEnumerable<JiraTask> GetTasks() =>
            _context.tasks;

        [HttpPost]
        public IActionResult AddTask([FromBody] JiraTask newTask)
        {

            newTask.Id = (int)DateTimeOffset.UtcNow.ToUnixTimeMilliseconds();
            _context.tasks.Add(newTask);
            _context.SaveChanges();

            System.Console.WriteLine("Added new task!");
            System.Console.WriteLine($"Tasks amount: {_context.tasks.ToList().Count.ToString()}");

            return Ok(newTask);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateTask(int id, [FromBody] JiraTask updatedTask)
        {
            JiraTask? existingTask = _context.tasks.FirstOrDefault(x => x.Id == id);

            if (existingTask == null)
            {
                System.Console.WriteLine("Not found!");
                return NotFound();
            }

            existingTask.Title = updatedTask.Title;
            existingTask.DroppableId = updatedTask.DroppableId;
            existingTask.Type = updatedTask.Type;
            existingTask.Priority = updatedTask.Priority;

            _context.SaveChanges();

            Console.WriteLine($"Updated task with id {id}.");

            return Ok(existingTask);
        }
    }
}