'use strict';

/**
 * @ngdoc function
 * @name evaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the evaApp
 */
angular.module('evaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
