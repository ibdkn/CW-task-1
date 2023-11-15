// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//
// #Examples:
//
// Kata.getMiddle("test") should return "es"
//
// Kata.getMiddle("testing") should return "t"
//
// Kata.getMiddle("middle") should return "dd"
//
// Kata.getMiddle("A") should return "A"

function getMiddle(string) {
    var middleIndex = string.length / 2;
    console.log(middleIndex)
    if (string.length % 2 == 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

console.log(getMiddle("teset"));