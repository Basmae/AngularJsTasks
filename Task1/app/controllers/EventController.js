eventsApp.controller('EventController',function EventController($scope,eventData){
     eventData.getEvent().$promise.
     then(function(event){
         $scope.event= event;
        },
         function(response){
             console.log(response);
         });

    $scope.upVoteSession = function(session)
    {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session)
    {
        session.upVoteCount--;
    };
})