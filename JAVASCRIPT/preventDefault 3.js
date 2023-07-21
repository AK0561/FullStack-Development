const anchor=document.getElementById('anc')
anchor.addEventListener('click',(event)=>
{
    event.preventDefault() //it prevents the event to go down to stop it's execution for the child nodes.
    alert('trick a treat!!')
})