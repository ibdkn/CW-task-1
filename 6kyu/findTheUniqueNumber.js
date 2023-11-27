// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// This is the first kata in series:
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// SOLUTION
function findUniq(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    if(sortArr[0] === sortArr[1]) {
        return sortArr[sortArr.length - 1];
    } else {
        return  sortArr[0]
    }

    // return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniq([ 1, 0, 0 ]));