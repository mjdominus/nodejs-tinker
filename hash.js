
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

exports.values = function (h) {
    var i, a = [];
    for (i in h) a.push(h[i]);
    return a;
};

exports.each = function (h, f) {
    var i;
    for (i in h) f(i, h[i]);
    return;
};

exports.new = function (h) {
    return { data: h,
             keys: function() { return exports.keys(h) },
             sortedKeys: function() { return exports.sortedKeys(h) },
             values: function() { return exports.values(h) },
             each: function(f) { return exports.each(h, f) },
           };
};
