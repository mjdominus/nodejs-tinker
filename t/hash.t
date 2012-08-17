
test = require("test");
hash = require("hash");

function setEq(a, b) {
  var K = [];
  for (i=0; i < a.length; i++) {
    if (K[a[i]] == undefined) K[a[i]] = 1;
    else  K[a[i]] += 1;
  }
  for (i=0; i < b.length; i++) {
    if (K[b[i]]) {
      if (--K[b[i]] == 0) {
        delete K[b[i]];
      }
    } else {
      console.warn("# set b has too many '%s'", b[i]);
      return 0;
    }
  }
  for (var k in K) {
    console.warn("# set a has too many '%s'", k);
    return 0;
  }
  return 1;
}

var h = { apple: 'red', cherry: 'red', kiwi: 'brown', banana: 'yellow' };

test.ok(setEq(hash.keys(h),
              [ "apple", "banana", "cherry", "kiwi" ]),
        "keys test");

test.is(hash.sortedKeys(h).join(),
        "apple,banana,cherry,kiwi",
        "sortedKeys test");

test.ok(setEq(hash.values(h),
              ['red', 'red', 'brown', 'yellow']),
        "values test");

var K = [], V = [];
hash.each(h, function(k, v) {
  K.push(k);
  V.push(v);
});
test.ok(setEq(hash.keys(h), K), "each() key list");
test.ok(setEq(hash.values(h), V), "each() value list");

test.done_testing();
