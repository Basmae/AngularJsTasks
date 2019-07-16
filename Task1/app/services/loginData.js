eventsApp.factory('loginData',function(){
    var user;
    return{
       getUser:function(){
          return user;
       },
       setUser:function(usr){
           user=usr;
       }
    };
})