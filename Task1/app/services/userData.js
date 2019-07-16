eventsApp.factory('userData',function($resource){
    var resource = $resource('/data/user/:userName',{userName:'@userName'});
    return{
       getUser:function(userName){
          return resource.get({userName:userName});
       },
       save:function(user){
           user.upvote=0;
           user.sessions=[];
           return resource.save(user);
       },
       update:function(user)
       {
           resource.get({userName:user.userName}).$promise.then(function(response){
                resource.save(user);
           })
       }
    };
})