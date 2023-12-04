// DESCRIPTION:
// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
// For example:
//
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// SOLUTION
function stringTransformer(str) {
    return str.split(' ').reverse().map(word => {
        return word.split('').map(letter => {
            if(letter.toUpperCase() === letter) {
                return letter.toLowerCase()
            } else {
                return letter.toUpperCase()
            }
        }).join('');
    }).join(' ');
}

console.log(stringTransformer('Example string'));