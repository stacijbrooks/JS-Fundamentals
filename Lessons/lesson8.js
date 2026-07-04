//Declarative Function
function helloOne() {
    console.log('Hello one!')
}
helloOne()

//Anonymous function
let helloTwo = function() {
    console.log('Hello two!')
}
helloTwo()

//ES6 Function or Arrow Function
let helloThree = () => {
    console.log('Hello three!')
}
helloThree()

//Function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}
printName('Owen', 'Dowling');

//Function with return
function multiplyByTwo(number) {
    let result = number * 2
    return result;
}
let myResult = multiplyByTwo(5);
console.log(myResult);

//import
import{ printAge } from '../Lessons/helpers/printHelper.js'

//import everything
import * as helper from '../Lessons/helpers/printHelper.js'
helper.printAge(10)