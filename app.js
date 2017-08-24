// enter name
let myName = prompt('What is your name?').toLowerCase()
// enter myAge
const myAge = prompt(`What is your age in years ${myName}?`)

// changable variable
let earlyYears = 2
// after first two years dogs age slower
let laterYears = myAge - earlyYears
// reassign earlyYears to dog years
earlyYears *= 10.5
// reassign laterYears to dog years
laterYears *= 4
// add early and later together
myAgeInDogYears = earlyYears + laterYears

console.log(`${myName} your age in dog years would be: ${myAgeInDogYears}`)
