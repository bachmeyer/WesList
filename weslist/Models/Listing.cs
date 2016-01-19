using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace weslist.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Pictures { get; set; }
        public Category ListingCategory { get; set; }
        public User Owner { get; set; }
    }
}