// A single line comment
/*
* This
* is
* multi-line
* comment*/

// Value, Types, and Operators
console.log("Value, Types, and Operators");
// boolean
console.log("****************************");
console.log("Boolean");
console.log(true) ;// example of boolean with true value
console.log(false); // example of a boolean with a false value
// null
console.log("****************************");
console.log("Nulls");
console.log(null); // example of a null
// undefined
console.log("****************************");
console.log("undefined");
let myNumber;
console.log(myNumber); // example of an undefined number
// number
console.log("****************************");
console.log("Numbers");
console.log(15); // example of a whole number
console.log(2.22); // example of a floating point number
console.log(5e5); // example of an exponent
// string
console.log("****************************");
console.log("String");
console.log("Hello, World1!"); // example of a string inside double quotes
console.log('Hello, World2!'); // example of a string inside single quotes
console.log(`Hello, World3!`) ;// example of a string inside backkicks quotes
// Strings special characters
console.log("****************************");
console.log("Special characters when manipulating strings");
console.log("\nHello"); // \n creates a new line
console.log("\tHello"); // \t creates a space infront of the line
//////////////////////////////////////////////////////////////////////////////////

// Operators
console.log("****************************");
console.log("Operators");
console.log("****************************");

// add
console.log("****************************");
console.log("add")
console.log(5 + 2); // adding whole numbers
console.log(10, 5 + 8.754); // adding floating-numbers
console.log("hello" + "World" + "1") // concatenating strings
// subtract 
console.log("****************************");
console.log("subtract")
console.log(100 - 25); // subtraction whole numbers
// divide
console.log("****************************");
console.log("divide");
console.log(12 / 5); // division of whole numbers
// multiply
console.log("****************************");
console.log("multiply");
console.log(25 * 5); // multiplying whole numbers
// modulo
console.log("****************************");
console.log("modulo");
console.log(25 % 5); // Remainder 
//////////////////////////////////////////////////////////////////////////////////

// comparing Values
console.log("****************************");
console.log("Comparisons");
console.log("****************************");

// equal to (==)
console.log("****************************");
console.log("equal to(==)");
console.log(5 == 5); // return true
console.log("5" == 5); // return true

// equal to with type check (===)
console.log("****************************");
console.log("equal to with type check(===)");
console.log(5 === 5); // return true
console.log("5" === 5); // return false

// not equal to (!=)
console.log("****************************");
console.log("not equal to(!=)");
console.log(1 != 5); // result is true
console.log("1" != 1); // return is false

// greater than (>)
console.log("****************************");
console.log("greater than (>)" );
console.log(5 > 1); // returns true
console.log(5 > 5) // return false

// greater than equal to (>=)
console.log("****************************");
console.log("greater than equal to");
console.log(5 >= 5) // return true
console.log(5 >- 5) // return true

// less than (<)
console.log("****************************");
console.log("less than (<)");
console.log(5 < 1); // returns false
console.log(5 < 5) // return false

console.log("****************************");
console.log("Logical Operators");
console.log("****************************");

// and (&&)
console.log(true && false); // will return false
console.log(true && true); // will return true
console.log(5 > 1 && 5 < 1); // will return false

// and (||)
console.log(true || false); // will return true
console.log(true || true); // will return true
console.log(false || false); // will return false
