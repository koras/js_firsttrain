function reverseArray (arr){
    let revarr = [];
    for (let i = 0; i < arr.length; i++)
        revarr[i] = arr[arr.length - i - 1];
    return revarr;
}
function reverseArrayInPlace (arr){
    for (let  i = 0; i < (arr.length/2); i++){
        a = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = a;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
