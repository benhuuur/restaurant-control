using System;
using System.Collections.Generic;

namespace back.Model;

public partial class ProductsRequest
{
    public int Id { get; set; }

    public int ProductId { get; set; }

    public int RequestId { get; set; }

    public double Total { get; set; }

    public virtual Product Product { get; set; }

    public virtual Request Request { get; set; }
}
