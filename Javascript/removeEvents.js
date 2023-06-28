// write your code here
const button=document.getElementById('my-button')
const button2=document.getElementById('my-second-button')
const input=document.getElementById('my-input')
button.addEventListener('click',changetext)
function changetext() {
    let output=document.querySelector('#output')
    output.innerText=input.value
}
button2.addEventListener('click',removeEvent,{
    once:true
})
function removeEvent() {
   button.removeEventListener('click',changetext)
}