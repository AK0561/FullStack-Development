const Incremenbtn=document.querySelector('#button1') //Selecting the button element from HTML
counter=0                                              //Initializing counter value to 0
const Counter=document.getElementById('counter')    //initializing the counter element by using it's id
const Decremenbtn=document.querySelector('#button2')    //Selecting the button element from HTML

function IncrementCounter()       //function for designating the increments
{
    counter++                    //incrementing the counter value
    Counter.innerText=counter   //assigning the value to its Counter element 
}
Incremenbtn.addEventListener('click',IncrementCounter)   //adding event listener of 'click'

function DecrementCounter()      //function for designating the decrements
{
    counter--                   //decrementing the counter value
    Counter.innerText=counter  //assigning the value to its Counter element 
}
Decremenbtn.addEventListener('click',DecrementCounter)   //adding event listener of 'click'