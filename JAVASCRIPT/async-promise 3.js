function getCheese () {
    return new Promise( (resolve, reject) => {
    setTimeout (() => {
    const cheese = "🧀";
    resolve (cheese);
    }, 2000);
    });
    }

    function makeDough (cheese) {
    return new Promise( (resolve, reject) => {
    setTimeout ( () => {
    const dough = cheese + "🥠";
    // resolve (dough);
    reject('Bad Cheese Delivered 🤢');
    }, 2000);
    });
    }

    function bakePizza(dough) {
    return new Promise( (resolve, reject) => {
    setTimeout (() => {
    const pizza = dough + "🍕";
    resolve (pizza);
    }, 2000) ;
    });
    }

 getCheese ()
.then ((cheese) => {
console. log ("here is the cheese", cheese); 
return makeDough (cheese) ;
})
.then ( (dough) => {
console. log ("here is the dough", dough); 
return bakePizza (dough);
})
.then ((pizza) => {
console. log ("here is the pizza", pizza);
})
.catch((data)=>{
    console.log('error occurred' + data)
})