// DESCRIPTION:
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
    let sumOfFirstArray = arr1.reduce((sum, elem) => {
        return sum + elem;
    }, 0);
    let sumOfSecondArray = arr2.reduce((sum, elem) => {
        return sum + elem;
    }, 0);

    return sumOfFirstArray + sumOfSecondArray;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));