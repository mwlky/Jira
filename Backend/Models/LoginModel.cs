namespace DG.Jira.Backend.Models {
    public class LoginModel {
        public required string Username { get; set; }
        public required string Password { get; set; }
        public required bool RememberMe { get; set; }
    }
}