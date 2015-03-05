'use strict';

/**
 * @ngdoc function
 * @name evaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the evaApp
 */
angular.module('evaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
