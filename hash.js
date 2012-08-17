
exports.keys = function (h) {
    var i, a = [];
    for (i in h) a.push(i);
    return a;
};

exports.sortedKeys = function (h) {
    var k = exports.keys(h);
    k.sort();
    return k;
};