using System;
using System.Collections.Generic;

namespace back.Model;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }

    public string Cpf { get; set; }

    public bool IsAdm { get; set; }

    public string Password { get; set; }

    public string Salt { get; set; }

    public virtual ICollection<Request> Requests { get; set; } = new List<Request>();
}
