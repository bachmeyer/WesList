using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using weslist.Models;

namespace weslist.ngApp.controllers
{
    public class ListingsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        public List<Listing> Get()
        {
            //long way to select list
            //var listings = (from l in _db.Listings
            //                select l).ToList();
            //return listings;
            //shorthand but cannot do anything with the listings
            return _db.Listings.ToList();

        }

    }
}
