define(['app'],	function ( app ) {

'use strict';

angular.module('<%= _.camelize(appname)%>App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'jQuery',
      'AngularJS',
      'Karma',
      'Underscore'
    ];
  });




});
