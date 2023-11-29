// DESCRIPTION:
// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
//
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

// SOLUTION
function numberOfPairs(gloves) {
    let obj = {};
    let sum = 0;
    obj = gloves.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
    }, {});
    return Object.values(obj).reduce((acc, current) => acc + parseInt(current / 2), 0);

    // let count = 0;
    // const arr = [...gloves];
    //
    // for (let i = 0; i < gloves.length; i++) {
    //     if (arr.length > 1) {
    //         const glove = arr.shift();
    //         const hasPair = arr.indexOf(glove);
    //         if (hasPair !== -1) {
    //             count++;
    //             arr.splice(hasPair, 1)
    //         }
    //     }
    // }
    // return count;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue", "yellow", "yellow"]));