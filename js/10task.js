function deepEqual(a, b) {
    if (a === b)
        return true;
 
    if (typeof(a) != "object" || typeof(b) != "object")
        return false;
    //не поняла(
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
