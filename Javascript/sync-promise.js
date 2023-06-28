function calculator(num1, num2, operation) {
	// return a Promise
    return new Promise((resolve,reject) =>{
        if(operation==='+')
        {
            resolve(num1+num2);
        }
        else if(operation==='-')
        {
            resolve(num1-num2);
        }
        else
        {
            reject('error');
        }
    })
}
console.log(calculator(5,10,'+'))
console.log(calculator(5,10,'-'))
console.log(calculator(0,0,'yo'))