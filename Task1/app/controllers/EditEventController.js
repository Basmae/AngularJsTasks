eventsApp.controller('EditEventController',function EditEventController($scope,eventData){
    $scope.saveEvent = function(event , newEventForm)
    {
        if(newEventForm.$valid){
            eventData.save(event).$promise
            .then(function(response){console.log('success',response)})
            .catch(function(response){console.log('failure',response)});
            window.alert("new Event Added");
            window.location='/events';
        }
        else
        {
            window.alert("Error");
        }
    };
    $scope.cancelEvent = function(){
        window.location = '/events';
    }

})