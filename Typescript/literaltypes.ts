//Literal types in TypeScript allow you to specify that a variable or parameter must have a specific, exact value, rather than just a general type. 
//Literal types are types that represent a single value or a specific set of values. 


let status1: "success" | "error" = "success";
function printStatus(status1: "success" | "error") {
    console.log(status1);
}
printStatus("success"); // Valid
printStatus("error");   // Valid
// printStatus("pending"); // Error, "pending" is not a valid value


let score: 0 | 1 | 2 = 1;
function getPriority(score: 0 | 1 | 2): string {
    if (score === 0) {
        return "Low";
    } else if (score === 1) {
        return "Medium";
    } else {
        return "High";
    }
}
getPriority(0); // Returns "Low"
getPriority(1); // Returns "Medium"
getPriority(2); // Returns "High"
// getPriority(3); // Error, 3 is not a valid value


//You can also create custom literal types by using the type keyword or by defining a type alias with specific values.
type CardinalDirection = "North" | "South" | "East" | "West";
let direction: CardinalDirection = "North";

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";
let cardSuit: Suit = "Diamonds";
