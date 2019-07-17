'use strict';
/*eventsApp.directive('mySample',function(){
    return{
        link:function(scope,element,attrs,controller){
            var markup="<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>"
            angular.element(element).html(markup);
        }
    }
});
*/


eventsApp.directive('eventThumbnail',function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl:'/templates/directives/eventThumbnail.html',
        scope:{
            event: "=event"
        }
    }
});

eventsApp.directive('sessionThumbnail',function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl:'/templates/directives/sessionThumbnail.html',
    }
});
eventsApp.directive('eventDetails',function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl:'/templates/directives/eventDetails.html',
    }
});
eventsApp.directive('upVote',function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl:'/templates/directives/upVote.html',
        scope:{
            upvote:"&",
            downvote:"&",
            count:"="
        }
    }
});
eventsApp.directive('focusInput', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            $timeout(function(){
                element[0].focus();
            }, 0);
        }
    };
});

eventsApp.directive('pressEnter', function() {
    return {
        restrict:'A',
        link: function(scope, element, attrs, controller) {
            element.bind("keydown keypress", function(event) {
                if (event.keyCode===13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngClick);
                    });   
                    
                }
            })
        }
    };
});

eventsApp.directive('dateInput',function(){
    return{
        restrict:'E',
        replace: true,
        templateUrl:'/templates/directives/dateInput.html',
    }
});