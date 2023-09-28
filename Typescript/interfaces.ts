interface Point2D {
  x: number,
  y : number
}

interface Point3D extends Point2D {   //similar to type Point3D = Point2D & { z : number }
 z:number
}

export const point : Point3D = { 
    x:1,
    y:2,
    z:4,
}