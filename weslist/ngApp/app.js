var weslist;
(function (weslist) {
    angular.module("weslist", ['ngRoute'])
        .config(function ($routeProvider) {
        //$routeProvider.when('/', {
        // templateUrl: '/path/to/view',
        // controller: weslist.Controllers.ControllerClass,
        // controllerAs: 'views variable name for controller'
        //});
        $routeProvider.when('/', {
            template: 'Hello World!',
        })
            .when('/listings', {
            templateUrl: '/ngApp/views/listListings.html',
            controller: weslist.Controllers.ListOfListingsController,
            controllerAs: 'controller'
        });
    });
})(weslist || (weslist = {}));
//# sourceMappingURL=app.js.map