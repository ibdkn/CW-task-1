// DESCRIPTION
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
//
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//
// If a string contains all repeating characters, it should return an empty string ("");
//
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// SOLUTION

function firstNonRepeatingLetter(s) {
    // 1

    // if(s.length > 1) {
    //     let arr = s.split('');
    //
    //     arr.map(l => {
    //         for (let i = 0; i < arr.length; i++) {
    //             if(arr[i + 1] && l.toLowerCase() === arr[i + 1].toLowerCase()) {
    //                 arr = arr.filter(ar => ar.toLowerCase() !== l.toLowerCase());
    //             }
    //         }
    //     })
    //     return arr.join('')
    // }
    // return s;

    // 2

    // let counts = {};
    // let arr = s.split('');
    //
    // arr.forEach(l => {
    //     let lowerCaseChar = l.toLowerCase();
    //     counts[lowerCaseChar] = (counts[lowerCaseChar] || 0) + 1;
    // });
    //
    // for (let i = 0; i < arr.length; i++) {
    //     let lowerCaseChar = arr[i].toLowerCase();
    //     if (counts[lowerCaseChar] === 1) {
    //         return arr[i];
    //     }
    // }

    // return '';

    // 3
    let str = s.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i];
        }
    }
    return '';

}

console.log(firstNonRepeatingLetter('a')) // 'a'
console.log(firstNonRepeatingLetter('stress')) // 't'
console.log(firstNonRepeatingLetter('mamamatm')) // 't'
console.log(firstNonRepeatingLetter('moonmen')) // 'e'