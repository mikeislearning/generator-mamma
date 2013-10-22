describe("experimentation", function() {
  var elem;

  beforeEach(function() {
    elem = $('<div id="container"><p>hello mike</p></div>');
  });

  it("allows us to search with css selectors ", function() {
    expect(elem).toBe('#container');
  });
});
