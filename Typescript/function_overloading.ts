function reverse(string:string) : string;
function reverse(stringArray:string[]) : string[];
function reverse(string_or_stringArray:string | string[]) {
    if(typeof string_or_stringArray === 'string'){
        return string_or_stringArray.split('').reverse().join('')
    }
   else{
     return string_or_stringArray.slice().reverse()
   }
}


console.log(reverse('hello'))
console.log(reverse(['h','e','l','l','o']))
