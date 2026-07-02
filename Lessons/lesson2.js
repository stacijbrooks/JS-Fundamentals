//Concatenation and Interpolation
let price = 50;
let itemName = "Cup"; 

//concatenation
let messageToPrint = "The price for your " + itemName + " is " + price + " dollars.";

//Interpolation is happening inside the template literal
let messageToPrint2 = `The price for your ${itemName} is ${price} dollars.`
console.log(messageToPrint);
console.log(messageToPrint2);

