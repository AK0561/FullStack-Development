import React , {useEffect, useState} from "react";
function Counter()
{
    const[count,setCount]=useState(0)
    useEffect( () => {
        console.log('Button Clicked')
    },[count])
    
    return(
        <div>
            <h2>Counter :{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default Counter


