// DESCRIPTION
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other
// elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns [false,1,1,2,1,3,"a",0,0]

// SOLUTION

function moveZeros(arr) {
    let zeros = arr.filter(el => el === 0);
    let nonZeros = arr.filter(el => el !== 0);
    return [...nonZeros, ...zeros];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // [false,1,1,2,1,3,"a",0,0]