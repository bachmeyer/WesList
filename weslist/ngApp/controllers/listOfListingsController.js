var weslist;
(function (weslist) {
    var Controllers;
    (function (Controllers) {
        var ListOfListingsController = (function () {
            function ListOfListingsController($http) {
                var _this = this;
                this.$http = $http;
                $http.get('/api/listings/')
                    .then(function (response) {
                    _this.listings = response.data;
                });
            }
            return ListOfListingsController;
        })();
        Controllers.ListOfListingsController = ListOfListingsController;
    })(Controllers = weslist.Controllers || (weslist.Controllers = {}));
})(weslist || (weslist = {}));
//# sourceMappingURL=listOfListingsController.js.map