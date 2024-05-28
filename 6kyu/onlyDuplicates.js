// Given a string, remove any characters that are unique from the string.
//
// Example:
//
// input: "abccdefee"
//
// output: "cceee"

// SOLUTION

function onlyDuplicates(str) {
    let lettersCount = {};

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        lettersCount[letter] = (lettersCount[letter] || 0) + 1;
    }

    return str.split('').filter(letter => lettersCount[letter] > 1).join('');
}

console.log(onlyDuplicates('colloquial')) // 'cceee'