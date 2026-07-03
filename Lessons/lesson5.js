// Logical "AND"
console.log(true && true); //all values have to be TRUE for expression to be True
console.log(true && false); //false

//Logical "OR"
console.log(true || false); //any value should be TRUE for the expression to be True

let ageIsMoreThanEighteen = true
let isUSCitizen = true

let eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('The customer is eligible for DL:' + eligibilityForDriversLicense)

//Logical "NOT"
console.log(!true); //false
console.log(6 !== 10); //true