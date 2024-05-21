// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION

function accum(s) {
    // let array = s.toLowerCase().split('');
    // let count = 0;
    // let res = [];
    // for (let i = 0; i < array.length; i++) {
    //     count = i + 1;
    //     let res1 = [];
    //     for (let j = 0; j < count; j++) {
    //         if(j === 0) {
    //             res1.push(array[i].toUpperCase())
    //         } else {
    //             res1.push(array[i])
    //         }
    //     }
    //     res.push(res1)
    // }
    // return res.map(r => r.join('')).join('-');
    return s
        .toLowerCase()
        .split('')
        .map((char, index) => char.toUpperCase() + char.repeat(index))
        .join('-');
}

console.log(accum("abcd")) // -> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // -> "C-Ww-Aaa-Tttt"
console.log(accum("ZpglnRxqenU")) // -> "C-Ww-Aaa-Tttt"