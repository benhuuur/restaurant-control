using System.Threading.Tasks;

namespace back.Services;

using System.Collections;
using DTO;
using Model;

public interface IUserService
{
    Task Create(UserCreateData data);
    Task<User> GetByLogin(string login);
}