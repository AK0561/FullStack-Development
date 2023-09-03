const path = require("path")

//Base File Name
console.log("File Name : ",path.basename(__filename))

//Directory Name
console.log("Directory Name : ",path.dirname(__filename))

//File Extension Name
console.log("Extension Name : ",path.extname(__filename))

//Create path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)