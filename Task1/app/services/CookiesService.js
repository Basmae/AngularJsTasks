eventsApp.factory('cookieService',function ( $cookieStore){
    return{
    saveSession: function(session)
    {
        $cookieStore.put('session'+session.id,1);
    },
    getSession: function(session)
    {
        console.log($cookieStore.get('session'+session.id));
        return $cookieStore.get('session'+session.id);
    },
    removeSession: function(session)
    {
        $cookieStore.remove('session'+session.id);
    }
    }
})