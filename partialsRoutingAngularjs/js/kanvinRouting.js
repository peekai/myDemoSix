var kanvin = angular.module('kanvin', ['ngRoute']);

kanvin.config(function($routeProvider) {
    $routeProvider    
        .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeController'
    }).when('/aboutus', {
        templateUrl: 'partials/aboutus.html',
        controller: 'aboutController'
    }).when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'servicesController'
    }).when('/careers', {
        templateUrl: 'partials/careers.html',
        controller: 'careerController'
    }).when('/contacts', {
        templateUrl: 'partials/contacts.html',
        controller: 'contactsController'
    }).otherwise({
        redirectTo: '/home'
    });
});

kanvin.controller('homeController', function ($scope) {
        $scope.message = 'hi there this is home';
    });

kanvin.controller('aboutController', function ($scope) {
        $scope.message = 'hi there about us';
    });

kanvin.controller('servicesController', function ($scope) {
        $scope.message = 'hi there services';
    });

kanvin.controller('careerController', function ($scope) {
        $scope.message = 'hi there career';
    });

kanvin.controller('contactsController', function ($scope) {
        $scope.message = 'hi there contacts';
    });




