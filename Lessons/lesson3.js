
//objects: key/value pairs
let customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
//Dot notation
customer.firstName = "Mike";
//BracketNotation
customer['lastName'] = "Silver";
console.log(`${customer.firstName} ${customer.lastName}`)

// console.log(customer);
// console.log(customer.firstName);
// console.log(customer['lastName']);

//arrays
let car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[0]);
console.log(car[1]);
console.log(customer.cars[0]);