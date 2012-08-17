
test = require("test");
hash = require("hash");

var h = { apple: 'red', cherry: 'red', kiwi: 'brown', banana: 'yellow' };

test.is(hash.sortedKeys(h).join(),
        "apple,banana,cherry,kiwi",
        "sortedKeys test");

test.done_testing();
