const head=document.querySelector('h1')
head.innerText='Hello Arnav ! Welcome to DOM'
console.log(head)
 const alllistitems=document.querySelectorAll('ul li')
 for(let i=0;i<=alllistitems.length;i++)
 {  const listitems=alllistitems[i]
    listitems.innerText='Welcome to this tutorial'
 }
 console.log(alllistitems)