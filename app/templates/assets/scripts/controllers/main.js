'use strict';

<% if (jsLibrary === "angular") { %>

angular.module('<%= _.camelize(appname)%>App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

<% } %>