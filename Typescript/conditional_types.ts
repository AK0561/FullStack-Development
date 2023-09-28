export type TypeName<T> = 
T extends string ? 'string'  : 
T extends number ? 'number' :
T extends boolean ? 'boolean' : 
T extends undefined ? 'undefined' :
T extends symbol ? 'symbol' : 
T extends bigint ? 'bigint' :
T extends Function ? 'function' : 
T extends null ? 'null' :
'object'

function typename<T>(t : T): TypeName<T> {
 if(t === null) return 'null' as TypeName<T>
 return typeof t as TypeName<T>
}

const str = typename('hello world')
const num = typename(133)
const bool = typename(true)
const undef = typename(undefined)
const symbol = typename(Symbol('star'))
const big = typename(24n)
const func = typename(function () { })
const obj = typename(null)
