// DESCRIPTION
// Write a function that returns the number of arguments it received.
//
// args_count() --> 0
// args_count('a') --> 1
// args_count('a', 'b') --> 2

// SOLUTION
function args_count (...args) {
    return args.length;
    // return arguments.length; // way-2
}

console.log(args_count(1, 2));
console.log(args_count('A', 'B', 'C'));
console.log(args_count(["foo", "bar"]));