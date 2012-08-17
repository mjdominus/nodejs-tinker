
var test = require("test.js");

test.is(1, 1, "test ok");
test.is("poo", "poo", "another test");
test.is("poo", "goo", "expect a mismatch");
test.is("a", "a");
test.is("a", "b");
test.done_testing();
