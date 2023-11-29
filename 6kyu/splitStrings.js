// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
//
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION
function solution(str){
    let arr = [];
    let strArr = str.split('');
    for (let i = 0; i < str.length / 2; i++) {
        if(str.length % 2 === 0) {
            arr.push(strArr.splice(0, 2).join(''))
        } else {
            strArr[str.length - 1] += '_';
            arr.push(strArr.splice(0, 2).join(''));
        }
    }
    return arr;
}

console.log(solution("abcdefe"))