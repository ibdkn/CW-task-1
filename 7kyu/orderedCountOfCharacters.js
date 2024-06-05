// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
//
// Consult the solution set-up for the exact data structure implementation depending on your language.
//
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    text = text.toString().split('');
    let obj = {};
    let order = []; // Массив для сохранения порядка символов

    for (const element of text) {
        if (!obj.hasOwnProperty(element)) {
            obj[element] = 0;
            order.push(element); // Добавляем новый символ в массив порядка
        }
        obj[element]++;
    }

    let array = [];
    for (const key of order) { // Используем массив порядка для перебора
        array.push([key, obj[key]]);
    }
    return array;
}

console.log(orderedCount(233312)); // [ [ '2', 2 ], [ '3', 3 ], [ '1', 1 ] ]

// console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// console.log(orderedCount('Code Wars')); //