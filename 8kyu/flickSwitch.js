function flickSwitch(arr){
    let val = true;
    return arr.map(el => el === "flick" ? val = !val : val)
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));