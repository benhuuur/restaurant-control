using System.Threading.Tasks;
using System.Linq;
using back.Model;
using DTO;
using Microsoft.EntityFrameworkCore;

namespace back.Services;

public class UserService : IUserService
{
    RestaurantContext context;
    ISecurityService security;
    public UserService(RestaurantContext context, ISecurityService security)
       {
            this.context = context;
            this.security = security;
       }
    public async Task Create(UserCreateData data)
    {
        User user = new User();
        var salt = await security.GenerateSalt();
        user.Name = data.Name;
        user.Email = data.Email;
        user.Cpf = data.Cpf;
        user.Password = await security.HashPassword(
            data.Password, salt
        );
        user.Salt = salt;
        
        this.context.Add(user);
        await this.context.SaveChangesAsync();
    }

    public async Task<User> GetByLogin(string login)
    {
        var query = 
            from u in this.context.Users
            where u.Cpf == login
            select u;
        
        return await query.FirstOrDefaultAsync();
    }
}
