'use strict';

<% if (jsLibrary === "angular") { %>

angular.module('<%= _.camelize(appname)%>App', [])
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

<% } else { %>

  console.log("Hello from app.js!");

  <% } %>
