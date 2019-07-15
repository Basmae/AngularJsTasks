'use strict';

eventsApp.filter('durations', function() {
  return function(duration) {
    switch(duration) {
      case 1:
        return "Half Hour";
      case 2:
        return "1 Hour";
      case 3:
        return "Half Day";
      case 4:
        return "Full Day";
    }
  }
})

eventsApp.filter('sessionIcon', function($sce) {
  return function(level) {
    switch(level) {
      case "Introductory":
        return $sce.trustAsHtml("<i class='icon-arrow-left icon-white'></i>");
      case "Intermediate":
        return $sce.trustAsHtml("<i class='icon-arrow-up icon-white'></i>");
      case "Advanced":
        return $sce.trustAsHtml("<i class='icon-arrow-right icon-white'></i>");
    }
  }
})