// Union types in TypeScript allow you to specify that a value can have one of several possible types. 
//This is useful when a variable or parameter can accept values of different types, and you want to provide type safety for those variations. 

// A function that accepts either a number or a string
function printValue(value: number | string) {
    console.log(value);
}

printValue(42);        // Valid, as 42 is a number
printValue("Hello");   // Valid, as "Hello" is a string
// printValue(true);    // Error, as true is neither a number nor a string


let mixedArray: (string | number)[] = ["Hello", 42, "World", 100];
