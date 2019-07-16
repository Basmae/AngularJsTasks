
//with Cookies


/*eventsApp.controller('EventController',function EventController($scope,eventData,cookieService){
     eventData.getEvent().$promise.
     then(function(event){
         $scope.event= event;
        },
         function(response){
             console.log(response);
         });

    $scope.upVoteSession = function(session)
    {
        var found = cookieService.getSession(session);
        if(found!=1)
        {
            session.upVoteCount++;
            cookieService.saveSession(session);
        }
    };
    $scope.downVoteSession = function(session)
    {
        var found = cookieService.getSession(session);
        if(found!=1)
        {
            session.upVoteCount--;
            cookieService.saveSession(session);
        }
    };
})*/


//with login , without cookies

eventsApp.controller('EventController',function EventController($scope,eventData,userData){
    eventData.getEvent().$promise.
    then(function(event){
        $scope.event= event;
       },
        function(response){
            console.log(response);
        });
    $scope.userName=window.localStorage.userName; 
    if($scope.userName!=""){
    userData.getUser($scope.userName).$promise.
    then(function(user){
        $scope.user= user;
    console.log($scope.user);

       },
        function(response){
            //console.log(response);
        });
    }
   $scope.logout = function()
   {
       window.localStorage.userName="";
       window.location = '/eventDetails.html';

   }
   $scope.upVoteSession = function(session)
   {
       if($scope.userName!="")
       {
    var found ;
       $scope.user.sessions.forEach(element => {
           if(element==session.id)
             found=1;
       });
       if(found!=1)
       {
           $scope.event.sessions[session.id-1].upVoteCount++;
           $scope.user.sessions.push(session.id);
           eventData.update($scope.event);
           userData.update($scope.user);
       }
       else{
           window.alert("you vote before");
       }
    }
    else
    {
        window.alert("you must login to have access to vote");
    }
   };
   $scope.downVoteSession = function(session)
   {
    if($scope.userName!="")
    {
       var found ;
       $scope.user.sessions.forEach(element => {
        if(element==session.id)
          found=1;
         });
       if(found!=1)
       {
           $scope.event.sessions[session.id-1].upVoteCount--;           
           $scope.user.sessions.push(session.id);
           eventData.update($scope.event);
           userData.update($scope.user);           

       }
       else{
        window.alert("you vote before");
    }
    }
    else
    {
        window.alert("you must login to have access to vote");
    }
   };
})