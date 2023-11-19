// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.
//
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let res = (s1 + s2).split('').filter((elem, index) => {
        return (s1 + s2).split('').indexOf(elem) === index;
    });
    return res.sort().join('');
    // let array = (s1 + s2).split('');
    // let newSet = new Set(array);
    // return Array.from(newSet)
}

console.log(longest("aretheyhere", "yestheyarehere")); // -> "aehrsty"

