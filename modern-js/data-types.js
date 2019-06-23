var a = 'test'
var b = 12
var c = true
var d = function (a, b) {
    return a + b;
}
var e = {
    propA: 'test',
    propB: 12
};
var f = [a, b, c, d, e]

console.log(a, typeof (a));
console.log(b, typeof (b));
console.log(c, typeof (c));
console.log(d, typeof (d), d(1, 2));
console.log(e, typeof (e), e['propA'], e.propB);
console.log(f, typeof (f), f.length, f[0]);
