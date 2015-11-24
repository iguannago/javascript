describe("HelloWorld", function() {
  var helloWorld;

  beforeEach(function() {
    helloWorld = new HelloWorld();
  });

  it("greet", function() {
    var msg = helloWorld.greet();
    expect(msg).toEqual("Hello World");
  });
});