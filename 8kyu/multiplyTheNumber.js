function multiply(number){
    let degree = null;
    let num = number;
    if(number < 0) {
        num = number * (-1);
    }
    degree = (num).toString().split('').length;
    console.log(degree)

   return number * Math.pow(5, degree);
}

console.log(multiply(-2));