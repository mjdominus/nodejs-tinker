
var test = require("test.js");

test.is(1, 1, "test ok");
test.is("poo", "poo", "another test");
test.is("poo", "goo", "expect a mismatch");
test.is("a", "a");
test.ok(1, "ok test ok");
test.ok(0, "expect an ok failure");
test.ok("foo");
test.done_testing();
