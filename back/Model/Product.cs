using System;
using System.Collections.Generic;

namespace back.Model;

public partial class Product
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public double Price { get; set; }

    public double? OffersPrice { get; set; }

    public bool IsOffers { get; set; }

    public int Picture { get; set; }

    public virtual Image PictureNavigation { get; set; }

    public virtual ICollection<ProductsRequest> ProductsRequests { get; set; } = new List<ProductsRequest>();
}
