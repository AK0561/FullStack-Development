//In TypeScript, the never type represents a type for values that will never occur. 
//It is typically used to indicate that a function will never return (i.e., it always throws an error or enters an infinite loop) or to represent values that are impossible to have in a given context. 

type Circle1 = {
    kind:'circle'
    radius : number
}
type Square1 = {
    kind:'square'
    side : number
}
type Rectangle1 = {
    kind:'rectangle'
    length : number
    width : number
}

type Shape1 = Circle1 | Square1 | Rectangle1

function area_new(shape:Shape1) {
    if(shape.kind === 'circle'){
        return Math.PI*shape.radius**2
    }if(shape.kind === 'square'){
        return shape.side * shape.side
    }if(shape.kind === 'rectangle'){
        return shape.length * shape.width
    }
    const ensuredAllCases : never = shape // it check whether all the cases mentioned in the union type get executed and defined inside the function if any of the case is not defined in the function it gives a runtime error.
    return ensuredAllCases
}