var a = ['test', 'second', 'okay'];

b = function (value) {
    console.log(value);
}

a.forEach(currentItem => {
    console.log(currentItem);
});

c = a.map(something => something.length);
console.log(c);

d = a.filter(te => te.length > 4);
console.log(d);
