'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, $location, eventData,$route) {
    $scope.events=$route.current.locals.events;

       // $scope.events = eventData.getAllEvents();
    }
);