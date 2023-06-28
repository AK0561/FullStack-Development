const arrowFunct=(arg) => arg**3
console.log(arrowFunct(40))

const button=document.getElementById('btn')
button.addEventListener('click', () => {
 console.log('Clicked button')
})