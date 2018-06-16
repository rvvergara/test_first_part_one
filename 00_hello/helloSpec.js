// talk about function
describe("Hello", function() {
  it("says hello", function() {
    expect(hello()).toEqual('Hello!');
  });

  it("says hello to someone", function() {
    expect(hello("Fred")).toEqual('Hello, Fred!');
  });

  it("says goodbye to a person",function(){
    expect(hello("Fred",true)).toEqual("Goodbye, Fred!");
  })
});
