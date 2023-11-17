// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    // let sortArray = numbers.sort((a, b) => a - b);
    // let firstElem = sortArray[0];
    // let firstCount = 0;
    // let secondCount = 0;
    // let lastElem = sortArray[sortArray.length - 1];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] === firstElem) {
    //         firstCount++;
    //     } else {
    //         secondCount++;
    //     }
    // }
    // if (firstCount > secondCount) {
    //     return lastElem;
    // } else {
    //     return firstElem;
    // }

    // Short Solution
    // for (var i in numbers){
    //     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
    //         return numbers[i];
    //     }
    // }
}

console.log(stray([1, 1, 2, 1, 1, 1]));