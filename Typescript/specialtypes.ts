// 1.any is the most flexible type in TypeScript.
// 2.Variables of type any can hold values of any type, and TypeScript essentially turns off type checking for these variables.
// 3.You can perform any operations on any values without type errors.
// 4.It's often used as a way to opt out of TypeScript's type checking when working with dynamic or third-party libraries that don't have type definitions.
// 5.While any provides flexibility, it sacrifices type safety, as you lose the benefits of TypeScript's type checking.

let value: any = 42;
value = "hello";
value = [1, 2, 3];


// 1.unknown is a safer alternative to any when you're dealing with values of unknown or dynamic types.
// 2.Variables of type unknown can hold values of any type, similar to any, but you cannot perform operations on them without type assertions or type checking.
// 3.Type assertions (using the as keyword) or type checking (with typeof, instanceof, or custom type guards) are required to narrow down the type of an unknown value before using it.
// 4.Unlike any, unknown maintains type safety because you must explicitly handle type conversions.

let value1: unknown = 42;
// Type checking using typeof operator.
if (typeof value === "number") {
    let numValue = value;
    console.log(numValue);
}
//This can also be written using the concept of type assertion by using the as operator which refrains from using the typeof operator
// this line of code can be rewritten as let numValue = value as number;  
