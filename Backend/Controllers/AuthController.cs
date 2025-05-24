using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

namespace DG.Jira.Backend.Controllers
{
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.IdentityModel.Tokens;
    using Models;

    [ApiController]
    [Route("auth")]
    public class AuthController(
        UserManager<IdentityUser> userManager,
        SignInManager<IdentityUser> signInManager,
        IConfiguration config)
        : ControllerBase
    {
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            var user = new IdentityUser { UserName = model.Username };
            var result = await userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
                return BadRequest(result.Errors);

            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            var result =
                await signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, false);

            if (!result.Succeeded)
                return Unauthorized(new { message = "Invalid credentials!" });

            var user = await userManager.FindByNameAsync(model.Username);
            var token = GenerateJwtToken(user);

            return Ok(new { token });
        }

        private string? GenerateJwtToken(IdentityUser user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            if (user.UserName == null) 
                return null;
            
            var token = new JwtSecurityToken(
                claims:
                [
                    new Claim(ClaimTypes.NameIdentifier, user.Id),
                    new Claim(ClaimTypes.Name, user.UserName)
                ],
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}