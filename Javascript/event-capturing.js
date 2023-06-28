const button=document.getElementById('button')
const div=document.getElementById('div')
// button.addEventListener('click',clickHandler,true)
button.addEventListener('click',clickHandler,true)
div.addEventListener('click',clickHandler2,true)
document.body.addEventListener('click',clickHandler3,true)
document.querySelector('html').addEventListener('click',clickHandler4,true)
function clickHandler() {
    alert("from button")
}
function clickHandler2() {
    alert("from div")
}
function clickHandler3() {
    alert("from body")
}
function clickHandler4() {
    alert("from html")
}