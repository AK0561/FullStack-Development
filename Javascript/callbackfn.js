const calculate = (a, b, operation) =>{
return operation(a, b);
};

/// method 1-callback function
// anonymous function is passed as an argument in calculate function to compute it's result
const addition = calculate(3, 4, function (num1, num2) {
return num1 + num2;
});
console.log(addition);


///method 2-callback function
const subtraction = (a, b) => a - b;
// subtraction function is passed as an argument in calculate function to compute it's result
const subResult = calculate (8, 3, subtraction);
console.log(subResult);