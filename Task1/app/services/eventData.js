eventsApp.factory('eventData',function($resource){
    var resource = $resource('/data/event/:id',{id:'@id'});
    var all=$resource('/data/event');
     
    return{
       getEvent:function(eventId){
          return resource.get({id:eventId});
       },
       save:function(event){
        all.get().$promise.then(function(response){
            event.id=response.id+1;
           console.log("successssss",event.id);
       },function(){
           console.log("errooooor");
       })
           return resource.save(event);
       },
       update:function(event)
       {
           resource.get({id:event.id}).$promise.then(function(response){
                resource.save(event);
           })
       },
       getAllEvents:function(){
           return $resource('data/events').query();
       }
    };
})