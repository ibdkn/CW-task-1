function mergeArrays(a, b) {
    let newArray = a.concat(b);
    let result = newArray.filter((number, index) => {
        return newArray.indexOf(number) === index;
    });

    return result.sort();
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6]));