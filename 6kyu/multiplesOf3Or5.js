// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

// SOLUTION

function solution(number) {
    if (number <= 0) return 0;

    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10)); // 23

// Пример с использованием АП для оптимизации кода
function sumMultiplesBelow(max, divisor) {
    const count = Math.floor((max - 1) / divisor); // Количество чисел, кратных divisor и меньших max
    return divisor * count * (count + 1) / 2; // Использование формулы суммы арифметической прогрессии
}

function solution(number) {
    if (number <= 0) return 0; // Проверка на отрицательные числа и 0

    const sumOfThrees = sumMultiplesBelow(number, 3);
    const sumOfFives = sumMultiplesBelow(number, 5);
    const sumOfFifteens = sumMultiplesBelow(number, 15); // Учитываем числа, кратные 15

    return sumOfThrees + sumOfFives - sumOfFifteens; // Суммируем числа, кратные 3 и 5, и вычитаем числа, кратные 15
}

// Примеры использования
console.log(solution(10));  // 23: 3 + 5 + 6 + 9 = 23
console.log(solution(-5));  // 0: отрицательные числа возвращают 0
console.log(solution(0));   // 0: 0 возвращает 0
console.log(solution(20));  // 78: 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78
console.log(solution(69611));  // Быстрое вычисление для большого числа