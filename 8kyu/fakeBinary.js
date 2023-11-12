// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

function fakeBin(x){
    let newArray = [];
    x.split('').forEach(letter => {
        if(letter < 5) {
            newArray.push('0');
        } else if(letter >= '1') {
            newArray.push('1')
        }
    });
    return newArray.join('').toString();
}

console.log(fakeBin('45385593107843568'));

// Short solution
// function fakeBin(x) {
//     return x.split('').map(letter => letter < 5 ? 0 : 1).join('');
// }