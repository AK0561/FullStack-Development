//Normal function defined with two argument values as type numbers and also returns the result in type numbers 
function add(a:number,b:number): number {
return a+b;
}

//A function which takes in string as an argument but as a void type return value i.e it doesn't return anything through this function
function str1 (msg:string): void{
 console.log("Msg :",msg)
}

//A function which takes multiple arguments with '...' operator
function add2(...values:number[]) {
    return values.reduce((prev,curr) =>
    {
        return prev+curr;
    })
}

add2(4,5);
add2(10,9,8);

//First Class Functions
type Add =(a:number,b:number) => number ;
//This line of code is equivalent to the javascript arrow functions