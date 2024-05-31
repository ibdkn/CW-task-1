// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
//
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
    const pairs = words.split(' ').map(word => {
        const num = word.match(/\d/); // Найти цифру в слове
        return [word, num ? parseInt(num[0]) : null];
    });
    const sortedWords = pairs.sort((a, b) => a[1] - b[1])
    return sortedWords.map(w => w[0]).join(' ');
}

console.log((order("is2 Thi1s T4est 3a")))                   //, "Thi1s is2 3a T4est")
console.log((order("4of Fo1r pe6ople g3ood th5e the2")))     //, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log((order("")))                                     //, "", "empty input should return empty string" )