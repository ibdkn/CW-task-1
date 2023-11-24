// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

// SOLUTION

function findAverage(array) {
    if(array.length > 0) {
        let res = array.reduce((acc, item) => acc + item);
        return res / array.length;
    }
    return 0;
}

console.log(findAverage([1,2,3,4]));