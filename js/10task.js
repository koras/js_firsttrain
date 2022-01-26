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


// из задания надо было написать рекурсию, это когда функция вызывает сама себя внутри функции и сравнивая содержимое
// а в нутри функции уже перебор самой функции.

//Приведу пример не из этого задания а для общего понимания
function req(data){
    Object.keys(myObject).map(function(key, index) {
      if(myObject[key] === 3){
            // вызываем рекурсию
            req(data);
      }
        return true;
    });
}

let myObject = { 'a': 1, 'b': 2, 'c': 3 };
