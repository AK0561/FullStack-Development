const arr1=[1,2,3]
const arr2=[4,5,6]
const arr3=[...arr1,...arr2]
console.log(arr3)

const obj1={
    name : "Arnav"
}
const obj2={
    age: 19
}
const obj3={
    ...obj1,
    ...obj2
}
console.log(obj3)