//  == vs ===
var a = '12';
var b = 12;
// console.log(a, b);
// console.log(a == b);
// console.log(a === b);

//  truthyness
var a = '';
var b = undefined;
var c = null;
var d = 'set';
// console.log(!!d);
// console.log(!d);

//  ternary operator
var something = 'value';
var defaultValue = 'default';
var result;
if (something.length >= 5) {
    result = something;
} else {
    result = defaultValue;
}
// var result = something.length >= 5 ? something : defaultValue;
// console.log(result);

//  or operator
var value4 = 'a';
var defaultValue4 = 'default';
// var result = !!value4 ? value4 : defaultValue4;
var result = value4 || defaultValue4;
console.log(result);
