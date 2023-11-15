// DESCRIPTION:
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0;

    str.split('').filter(item => {
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count++;
        }
    });

    return count;

    // Another solution:
    // return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra"));