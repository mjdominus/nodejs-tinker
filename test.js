
var harness;
harness = {
    tests_so_far: 0,
    is: function(a, x, message) {
        if (a == x) {
            harness.ok(message);
        } else {
            harness.nok(a, x, message);
        }
    },
    ok: function(message) {
        var i = ++harness.tests_so_far;
        if (message == undefined) {
            console.log("ok %d", i);
        } else {
            console.log("ok %d # %s", i, message);
        }
    },
    nok: function(a, x, message) {
        var i = ++harness.tests_so_far;
        if (message == undefined) {
            console.log("not ok %d", i);
        } else {
            console.log("not ok %d # %s", i, message);
        }
    },
    done_testing: function() {
        if (harness.tests_so_far == 0) {
            console.log("# no tests run!");
        } else {
            console.log("1..%d", harness.tests_so_far);
        }
    },
};

exports.harness = function () { harness };

exports.is = harness.is;
exports.done_testing = harness.done_testing;
exports.is = harness.is;
exports.ok = function(v, msg) {
    if (v) {
        harness.ok(msg);
    } else {
        harness.nok(undefined, undefined, msg);
    }
};
