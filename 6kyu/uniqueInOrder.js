// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Solution

var uniqueInOrder = function (iterable) {
    // let array = [];
    // if(typeof iterable === 'string') {
    //     iterable = iterable.split('')
    // }
    // for (let i = 0; i < iterable.length; i++) {
    //     if(iterable[i] !== iterable[i + 1]) {
    //         array.push(iterable[i]);
    //     }
    // }
    // return array

    iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
    return iterable.filter((s, i) => s !== iterable[i+1])
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))   // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))           // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]))     // [1,2,3]