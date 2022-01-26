function countBs(b_str){
    kolvo = 0;
    for (i = 0; i < b_str.length; i++){
        if (b_str.charAt(i) == 'B')
            kolvo += 1;
    }
    return kolvo;
}
function countChar(b_str, s){
    kolvo = 0;
    for (i = 0; i < b_str.length; i++){
        if (b_str.charAt(i) == s)
            kolvo += 1;
    }
    return kolvo;
}

let beans = "B3SLWBB7W0KSABBBBKLSM5"; //7 B
let simbol = 'W';
console.log(countBs(beans));
console.log(countChar(beans, simbol));

