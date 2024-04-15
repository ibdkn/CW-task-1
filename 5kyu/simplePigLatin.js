// DESCRIPTION
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation
// marks untouched.
//
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// SOLUTION

function pigIt(str){
    let res = str.split(' ').map(word => {
        if (/[.,!?;:]/.test(word)) {
            return word;
        }

        let w = word.split('');
        let d = w.shift();

        return w.join('').concat(d, 'ay');
    });
    return res.join(' ');
}

console.log(pigIt('Pig latin is cool')) // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string !')) // 'hisTay siay ymay tringsay'