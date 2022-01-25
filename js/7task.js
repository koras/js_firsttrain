function range (f, l, st){
    let arr = [];
    let a = 0;
    if (f < l || f === l) {
        for (i = f; i <= l; i += st){
            arr[a] = i;
            a++;
        }
    }
    if (f > l){
        for (i = f; i >= l; i += st){
            arr[a] = i;
            a++;
        }
    }
    return arr;
}
function sum (arr){
    let rez = 0;
    for (i = 0; i < arr.length; i++)
        rez += arr[i];
    return rez;
}

console.log(sum(range(1, 10, 2)));
