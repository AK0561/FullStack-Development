function double(this : {value:number}){
    this.value = this.value *2
}

const valid= {
 value:100,
 double,
}


valid.double()
console.log(valid.value)

const invalid = {
    value :200, //'valve' gives error as we already specified with the this parameter that it takes value as an argument with type number 
    double,
}

invalid.double()
console.log(invalid.value)