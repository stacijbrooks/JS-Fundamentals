//Loops
// console.log('Hello World!');
// console.log('Hello World!');
// console.log('Hello World!');

// for (statement1; statement2; statement3) {
// }

//for loop (for i loop)
for(let i=0; i<5; i=i+1) { //or i=i+1 can also be i++
    console.log('Hello World!');
    console.log('Hello World!' + i);
}

let cars = ["Volvo", "Toyota", "Tesla"]
    //for loop
for(let car of cars) {
    console.log(car);
    if(car == "Toyota") {
        break
    }
}

//ES6 Syntax for each loop
cars.forEach( car => {
      console.log(car);
})
