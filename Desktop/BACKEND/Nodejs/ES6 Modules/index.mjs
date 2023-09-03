// import {cubeofanumber,square as squareofanumber} from "./1.mjs";
// console.log(squareofanumber(5))
// console.log(cubeofanumber(5))

 //if we want to import multiple modules from a file use this syntax as import * as <any_name> from "file_name.mjs"
//  import * as operation from "./1.mjs"
//  console.log(operation.cube(7))
//  console.log(operation.square(7))

import {square,power4} from './index-2.mjs'
console.log(power4(4))