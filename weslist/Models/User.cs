﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace weslist.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public List<Listing> UserListing { get; set; }

    }
}