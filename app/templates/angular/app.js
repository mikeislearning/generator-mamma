define( function(){

'use strict';


return angular.module('<%= _.camelize(appname)%>App', [ 'ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  ]//$routeProvider was added to give an alias
  );

});
