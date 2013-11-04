<% if (includeRequireJS) { %>define(['app'],function() { <% } %>

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

    var source = $("#some-template").html();
    var template = Handlebars.compile(source);

    var data = {
        users: [ {
            person: {
                firstName: "Mike",
                lastName: "Mac"
            },
            jobTitle: "Front End Dev",
            twitter: "mikeislearning"
        }, {
            person: {
                firstName: "Mike",
                lastName: "Finch"
            },
            jobTitle: "Photographer",
            twitter: "photobasics"
        }, {
            person: {
                firstName: "Mike",
                lastName: "James"
            },
            jobTitle: "LEGO Geek",
            twitter: "minifigures"
        } ]
    };

    Handlebars.registerHelper('fullName', function(person) {
      return person.firstName + " " + person.lastName;
    });

    $('#handleSample').append(template(data));



    return App;


<% } if (includeRequireJS) {%> }); <% } %>
