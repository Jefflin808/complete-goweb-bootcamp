// normal for loop
for (i = 0; i < 10; i++) {
    console.log(i);
}

// key, value loop
for (var key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + ' -> ' + p[key]);
    }
}

// another key value loop
Object.keys(obj).forEach(function(key) {
    console.log(key, obj[key]);
})

// there's also a `for...of`