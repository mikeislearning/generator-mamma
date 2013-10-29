<% if (includeRequireJS) { %>define(function() { <% } %>

<% if(angular) { %>

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

<% } else {%>

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };

    return App;

<% } %>

<% if (includeRequireJS) {%> }); <% } %>
