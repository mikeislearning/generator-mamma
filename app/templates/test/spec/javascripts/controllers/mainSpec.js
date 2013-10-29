<% if (includeRequireJS) { %>

  define(['app', 'jquery', 'angular'], function(App, $, angular) {

<% } if(angular) { %>'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('<%= _.camelize(appname) %>App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(5);
  });
});
<% } %>
    describe('just checking', function() {


        it('that underscore works', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

  describe("experimentation", function() {
    var elem;

    beforeEach(function() {
      elem = $('<div id="container"><p>hello mike</p></div>');
    });

    it("allows us to search with css selectors ", function() {
      expect(elem).toBe('#container');
    });
  });

<% if (includeRequireJS) { %>

});

<% } %>
