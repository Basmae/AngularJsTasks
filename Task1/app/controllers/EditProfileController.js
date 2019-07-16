'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope,userData) {
        $scope.user = {};
        $scope.saveUser = function(user , profileForm)
        {
            if(profileForm.$valid){
                userData.save(user).$promise
                .then(function(response){console.log('success',response)})
                .catch(function(response){console.log('failure',response)})
            }
        };

        
        $scope.cancelUser = function(){
            window.location = '/eventDetails.html';
        }
    

    }
);

