type Circle = {
    kind:'circle'
    radius : number
}
type Square = {
    kind:'square'
    side : number
}
type Rectangle = {
    kind:'rectangle'
    length : number
    width : number
}

type Shape = Circle | Square | Rectangle

function area(shape:Shape) {
    if(shape.kind === 'circle'){
        return Math.PI*shape.radius**2
    }if(shape.kind === 'square'){
        return shape.side * shape.side
    }if(shape.kind === 'rectangle'){
        return shape.length * shape.width
    }
}
