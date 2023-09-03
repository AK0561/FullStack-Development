const url = require('url')
const myurl = new URL("http://mywebsite.com/hello.html?id=100&status=active")

//Serialized URL
console.log(myurl.href)

//Host(root domain)
console.log(myurl.host)

//Hostname
console.log(myurl.hostname)

//Pathname
console.log(myurl.pathname)

//Serialized Query
console.log(myurl.search)

//Params Object
console.log(myurl.searchParams)

//Add param 
myurl.searchParams.append('abc','123')
console.log(myurl.searchParams)

// Loop through params
myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));