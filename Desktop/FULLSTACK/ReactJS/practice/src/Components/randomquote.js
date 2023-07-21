import React,{useState} from "react";
const quotes=[
    'hello world!',
    'hello world!2',
    'hello world!3',
    'hello world!4',
    'hello world!5'
]
function Quote()
{
    const [quote,setQuote]=useState(quotes[0])
    function RandomQuote()
    {
        const randomQuote=quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(randomQuote)
    }
    return (
        <div>
        <h2>Quote of the day : {quote}</h2>
        <button onClick={RandomQuote}>Generate a new quote.</button>
        </div>
    );
}
export default  Quote