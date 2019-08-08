visit = require("../src/visitor");
var fs = require('fs');

describe("spies", function () {
  var visitor = new Visitor("bob", "smith", 2 / 1 / 2019, 7, "sally");
  it('should spy on save', function () {
    var spy = spyOn(visitor, 'save');
    visitor.save();
    expect(spy).toHaveBeenCalled();
  })
})


describe("read", function () {
  var visitor = new Visitor("alice", "mere", 12 / 07 / 2019, 6, "josh");
  it("should read content", function () {
    var result = visitor.load(1);
    expect(result).not.toBeNull();
  })
})
