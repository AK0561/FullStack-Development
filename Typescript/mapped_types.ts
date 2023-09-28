// Mapped types in TypeScript are like templates that help you create new types by changing the properties of an existing type.

// Here are some common scenarios:
// 1.Making properties read-only: If you have a type representing a person with a `name` and an `age`, you can use a mapped type to make all the properties read-only, meaning you can't change them after they're set.

   type Person_1 = {
     name: string;
     age: number;
   };

   // Mapped type that makes properties read-only
   type ReadonlyPerson = {
     readonly name: string;
     readonly age: number;
   };

// 2.Creating a version with some properties optional:If you have a type representing a person, and you want to create a version where some properties are optional (not required), you can do that with a mapped type.

   // Original type
   type Person2 = {
     name: string;
     age: number;
   };

   // Mapped type that makes properties optional
   type PartialPerson = {
     name?: string;
     age?: number;
   };

// 3.Removing properties:** If you have a type representing a person with an `address`, and you want to remove the `address` property, a mapped type can help.

   // Original type
   type Person3 = {
     name: string;
     age: number;
     address: string;
   };

   // Mapped type that removes the 'address' property
   type PersonWithoutAddress = {
     name: string;
     age: number;
   };
   

// 4.Changing the type of properties: If you have a type with properties of different types, you can use a mapped type to change all the property types to be the same.

   // Original type
   type Person4 = {
     name: string;
     age: number;
   };

   // Mapped type that changes all property types to 'string'
   type StringifiedPerson = {
     name: string;
     age: string;
   };
