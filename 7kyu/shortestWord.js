// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(string) {
    let res = [];
    string.split(' ').forEach(item => {
        res.push(item.length);
    });
    return Math.min(...res);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));