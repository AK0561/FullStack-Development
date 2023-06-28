const button=document.getElementById('button')
const div=document.getElementById('div')
button.addEventListener('click',clickHandler)
div.addEventListener('click',clickHandler2)
document.body.addEventListener('click',clickHandler3)
document.querySelector('html').addEventListener('click',clickHandler4)
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
