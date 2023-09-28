// In TypeScript, index signatures allow you to define the shape of objects or classes with dynamic keys, where the keys are not known in advance. 
// They are particularly useful when you want to work with objects that have properties with arbitrary keys, such as dictionaries or maps.

interface NumberDictionary {
    [key: number]: string; //Basic Syntax of Index Signatures in Typescript
  }
  
  const numericColors: NumberDictionary = {
    1: "red",
    2: "green",
    3: "blue",
  };
  
  console.log(numericColors[2]); // Output: green
  
//[key: string] represents the key type, which can be a string or a number (or a union of these types).
//valueType represents the type of values associated with the keys.