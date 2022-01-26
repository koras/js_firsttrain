for (thislo = 1; thislo <= 100; thislo++){
    
    if (thislo % 3 == 0)
        console.log('Fizz');
    else if (thislo % 5 == 0)
        console.log('Buzz');
    
    if (thislo % 3 == 0 && thislo % 5 == 0)
        console.log('FizzBuzz');
    else
        console.log(thislo);
}
