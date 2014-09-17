'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AlertCtrl
 * @description
 * # AlertCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AlertCtrl', function ($scope) {
   $scope.widgetval = {
      'faults':2,
      'warnings':2,
      'tweek':10,
      'tmonth':22,
      'aweek':12,
      'amonth':30.4,           
    };    

    $scope.alerts = [
      {
        'pos' : 'left',
        'type' : 'warn',
        'desc' : 'Temperature Near Threshold',
        'due' : '13 hours ago',
      },
      {
        'pos' : 'right',
        'type' : 'warn',        
        'desc' : 'Humidity Near Threshold',
        'due' : 'yesterday',
      },
      {
        'pos' : 'left',
        'type' : 'fault',
        'desc' : 'Too much Sunlight',
        'due' : '12 August 2014',
      }
      ];

    //go
    $scope.go = function (path) {
      $location.url(path);
    };
    
});
