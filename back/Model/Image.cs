﻿using System;
using System.Collections.Generic;

namespace back.Model;

public partial class Image
{
    public int Id { get; set; }

    public byte[] Picture { get; set; }
}
