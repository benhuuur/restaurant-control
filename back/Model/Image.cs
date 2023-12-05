using System;
using System.Collections.Generic;

namespace back.Model;

public partial class Image
{
    public int Id { get; set; }

    public byte[] Picture { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
