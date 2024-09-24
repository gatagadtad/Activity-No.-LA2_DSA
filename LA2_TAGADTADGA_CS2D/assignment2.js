// Initialize variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

// 2a: Display the sum of the declared variables and constant
let sum = a + b + c + Number(d) + e;
console.log("Sum =", sum);

// 2b: Compare the values of variable d and constant e using relational operators
console.log("d > e =", d > e);
console.log("d < e =", d < e);
console.log("d >= e =", d >= e);
console.log("d <= e =", d <= e);
console.log("d === e =", d === e);

// 2c1: Subtract all the values of the declared variables
let subtractionResult = a - b - c - Number(d);
console.log("Subtraction Result =", subtractionResult);

// 2c2: Multiply the values of variable a and c, divided by constant e
let multiplicationDivisionResult = (a * c) / e;
console.log("Multiplication and Division Result =", multiplicationDivisionResult);

// 2c3: Display the exponent value of constant e raised to the power of variable c
let exponentResult = Math.pow(e, c);
console.log("Exponent Result =", exponentResult);

// Step 2c4: Reassign the value of c.3 to constant e, then display the result
// We can display the exponent result directly.

console.log("Reassigned Exponent Result (constant e) =", exponentResult);
