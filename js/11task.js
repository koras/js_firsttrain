let arrays = [[1,2,3], [4,5], [6]];
arrays = arrays.reduce(function(a, b) {
    return a.concat(b);
});
console.log( arrays );

// отлично
