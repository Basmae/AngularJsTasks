var eventsApp = angular.module("eventsApp",['ngResource','ngCookies','ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/EditProfile',{
        templateUrl:'templates/EditProfile.html',
        controller:'EditProfileController'
    });
    $routeProvider.when('/NewEvent',{
        templateUrl:'templates/NewEvent.html',
        controller:'EditEventController'
    });
    $routeProvider.when('/events',{
        templateUrl:'templates/EventList.html',
        controller:'EventListController',
        resolve:{
            events:function(eventData){
                return  eventData.getAllEvents().$promise;
            }  
        }
    });
    $routeProvider.when('/event/:eventId',{
        templateUrl:'templates/EventDetails.html',
        controller:'EventController'
    });
    $routeProvider.when('/login',{
        templateUrl:'templates/Login.html',
        controller:'LoginController'
    });
    $routeProvider.when('/about',{
        template:'About Page'
    });
    $routeProvider.otherwise({redirectTo:'/events'});
    $locationProvider.html5Mode(true);
})
