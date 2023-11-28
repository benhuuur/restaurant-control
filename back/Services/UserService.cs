using System.Threading.Tasks;
using System.Linq;
using back.Model;
using DTO;
using Microsoft.EntityFrameworkCore;

namespace back.services;

public class UserService : IUserService
{
    RestaurantContext context;
    public UserService(RestaurantContext context)
        => this.context = context;
    public async Task Create(UserCreateData data)
    {
        User user = new User();
        user.Name = data.Name;
        user.Email = data.Email;
        user.Cpf = data.Cpf;
        user.Password = data.Password; //??????
        user.Salt = "????";
        
        this.context.Add(user);
        await this.context.SaveChangesAsync();
    }

    public async Task<User> GetByLogin(string login)
    {
        var query = 
            from u in this.context.Users
            where u.Name == login
            select u;
        
        return await query.FirstOrDefaultAsync();
    }
}
