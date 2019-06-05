//First exercise

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = []

for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18 && ages[i] <= 49) {
        fave_demo.push(ages[i])
    }
}

//Joes version

// ages.forEach( function(num)) {
//     if (num >= 18 && num <= 49) {
//         fave_demo.push(num)
//     }
// }

console.log(fave_demo)


//Second exercise

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]

for ( i = 0; i < yoda_quote.length; i++) {
    if (yoda_quote[0] === "the") {
        yoda_quote[0] = "The"
    }
    else if (yoda_quote[2] === "teacher") {
        yoda_quote[2] = "teacher,"
    }
}

let newQuote = `Yoda says, ${yoda_quote.join(" ")}`

console.log(newQuote)

//Joes version

// let yodaSays = []
// yoda_quote.forEach( function(word) {
//     if( word === "the") {
//         word = "The"
//     }
//     if( word === "teacher") {
//         word = "teacher,"
//     }
//     yodaSays.push(word)
// })

// console.log(`Yoda says, ${yodaSays.join(' ')."}`)


//Basic
function add() {
    return 2 + 2
}

let sum = add()

// harder


//even harder
function add(num1, num2) {
    return num1 + num2
}

let sum =(2, 4)

//getting weird
function add(numArr) {
    return numArr[0] + numArr[1]    //num[0] refers to index of the array called down below
}

let sum = add([2,4])    //the 2 is index 0 and the 4 is index 1 ^^

//now this is too much

function add(numObj) {
    return numObj.num1 + numObj.num2
}

let sum = add({num1: 2, num2: 4})

//holy sh**

function add() {
    return 2 + 2
}

function subtract() {
    return 4 - 1
}

function calculate(func) {
    return `I used a calculator to get this result: ${func()}`
}

let mathMsg = calculate(add) //doesnt execute add(), add executes and equals 4 before
let mathMsg = calculate(subtract)