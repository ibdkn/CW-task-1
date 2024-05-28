// The goal of this exercise is to convert a string to a new string where each character in the new string is "("
// if that character appears only once in the original string, or ")" if that character appears more than once in
// the original string. Ignore capitalization when determining if a character is a duplicate.
//
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Solution

function duplicateEncode(word){
    let lettersCount = {};
    let lowerWord = word.toLowerCase();

    for (let i = 0; i < lowerWord.length; i++) {
        let letter = lowerWord[i];
        lettersCount[letter] = (lettersCount[letter] || 0) + 1;
    }

    let encodedString = '';
    for (let i = 0; i < lowerWord.length; i++) {
        let letter = lowerWord[i];
        encodedString += (lettersCount[letter] === 1) ? '(' : ')';
    }

    return encodedString;
}

console.log(duplicateEncode("din"))      // "((("
console.log(duplicateEncode("recede"))   // "()()()"
console.log(duplicateEncode("Success"))  // ")())())"
console.log(duplicateEncode("(( @"))     // "))(("