// DESCRIPTION:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final
// outcome must be sorted and not have any duplicate.
function mergeArrays(a, b) {
    let newArray = a.concat(b);
    let result = newArray.filter((number, index) => {
        return newArray.indexOf(number) === index;
    });

    return result.sort();
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6]));