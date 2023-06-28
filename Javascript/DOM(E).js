const button=document.getElementById('my-button')
button.addEventListener('click',changetext,{
    once:true
})
function changetext()
{
    let output=document.getElementById('output')
    output.innerText=button.innerText
}