// An assertion function specifies, in its signature, the type predicate to evaluate.

function isString(value: unknown): asserts value is string {
    if (typeof value !== "string") throw new Error("Not a string")
  }

//If we invoke the function above with a given parameter, and it returns correctly, TypeScript knows that value has type string. 
//Hence, it will narrow down its type to string:

const aValue: string|number = "Hello"
console.log(isString(aValue))
// The type of aValue is narrowed to string here