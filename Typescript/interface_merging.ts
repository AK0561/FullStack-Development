//When interfaces with the same name are defined in different parts of your code, 
//TypeScript will merge them into a single interface declaration.

// First interface declaration
interface Person1 {
    name: string;
    age: number;
  }
  
  // Second interface declaration with the same name
  interface Person1 {
    address: string;
  }
  
  let person: Person1 = {
    name: "Alice",
    age: 30,
    address: "123 Main St",
  };
  