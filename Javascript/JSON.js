const obj={
    a:1,
    b:'Arnav'
}
const pre=document.querySelector('pre')
const JSONstring=JSON.stringify(obj)
pre.innerText=JSONstring
const objAgain=JSON.parse(JSONstring)
pre.innerText=objAgain.b
// pre.innerText=JSON.stringify(obj)

const obj2={
    prop1:100,
    prop2:200,
    prop3:300
}
console.log(JSON.stringify(obj2,['prop1','prop2'],3))


function fn(key,value){
    console.log({key,value})
    return value
}
console.log(JSON.stringify(obj2,fn,4))