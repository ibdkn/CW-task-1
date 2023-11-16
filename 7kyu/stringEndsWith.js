// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    let endingLength = ending.length - 1;
    let strLength = str.length - 1;

    let newStr = str.slice(strLength - endingLength, strLength + 1);

    if(newStr === ending) {
        return true;
    } else {
        return false;
    }

    // Short solution
    // return str.endsWith(ending);
}

console.log(solution('abcde', 'cde'));