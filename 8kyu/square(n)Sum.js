// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers){
    if(numbers && numbers.length > 1) {
        return numbers.reduce((acc, val) => {
            return acc + (Math.pow(val, 2));
        }, 0);
    } else {
        return 0;
    }
}

console.log(squareSum([11,-15,4,7]));

