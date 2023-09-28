// Shape-Based Compatibility: TypeScript checks whether two types are compatible based on their structures. 
// If two types have the same structure, they are considered compatible, 
// even if they have different names or were defined in different places.

// Type Inference: TypeScript can infer types based on the actual shape of an object. 
// For example, if you declare a variable and assign it an object with specific properties and methods, 
// TypeScript will infer the type of that variable based on the structure of the assigned object.


interface Point1 {
    x: number;
    y: number;
}

function printPoint(point: Point1) {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

const myPoint = { x: 1, y: 2, z: 3 }; // Extra property 'z' doesn't cause an error
printPoint(myPoint); // This works because 'myPoint' has the same structure as 'Point'

