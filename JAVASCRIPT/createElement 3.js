const Incremenbtn=document.querySelector('#button1')
counter=0                                              
const Counter=document.getElementById('counter')    
const Decremenbtn=document.querySelector('#button2')    
const ulElement=document.getElementById('list-items')

function IncrementCounter()       
{
    counter++                 
    Counter.innerText=counter  
    const liEl=document.createElement('li')
    // const textEl=document.createTextNode('Hello Arnav!'+counter)
    // liEl.appendChild(textEl)
    liEl.setAttribute('data-counter',counter)
    liEl.innerHTML="<b>Hello</b>" + counter
    ulElement.appendChild(liEl) 
}
Incremenbtn.addEventListener('click',IncrementCounter)  

function DecrementCounter()     
{
    const liEl=ulElement.querySelector('[data-counter="'+counter+'"]')
    liEl.remove()
    counter--                 
    Counter.innerText=counter 
}
Decremenbtn.addEventListener('click',DecrementCounter)  