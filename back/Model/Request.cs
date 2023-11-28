using System;
using System.Collections.Generic;

namespace back.Model;

public partial class Request
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public virtual ICollection<ProductsRequest> ProductsRequests { get; set; } = new List<ProductsRequest>();

    public virtual User User { get; set; }
}
