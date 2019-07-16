'use strict';

eventsApp.controller('LoginController',
    function LoginController($scope,userData,loginData,) {
        $scope.user = {};
        $scope.login = function()
        {
                userData.getUser($scope.user.userName).$promise
                .then(function(response){
                    console.log('success',response);
                    if($scope.user.password == response.password)
                    {
                        window.localStorage.userName=response.userName;
                        window.location = '/eventDetails.html';
                    }
                    else
                    {
                        window.alert("Login failed , wrong password");
                    }
            })
                .catch(function(response){
                    console.log('failure',response);
                    window.alert("Login failed , wrong username");

                })
        };

        
        $scope.cancelUser = function(){
            window.location = '/eventDetails.html';
        }
    

    }
);

