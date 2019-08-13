Visitor = require('../visitor');
var visitor = new Visitor("bob", "smith", 2 / 1 / 2019, 7, "sally");
describe("Save method", function () {
  it("should create json file", function () {
  expect(visitor.save()).toContain("saved");
  });
});


describe("read method", function () {
  it("should read content", function () {
    var result = visitor.load(1);
    expect(result).not.toBeNull();
  })
})



