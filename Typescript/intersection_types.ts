type Person = {
    name  : string,
}
type EmailID = {
    email : string,
}
type PhoneNo = {
    phoneno : number,
}

type ContactDetails = 
    &Person
    &EmailID
    &PhoneNo

function display(details: ContactDetails) {
   console.log(`Dear ${details.name},
   I hope you received mail at ${details.email}.
   We will call you at ${details.phoneno} shortly.`)
}

display ({
  name:'Arnav',
  email:'arnav13203@gmail.com',
  phoneno:9891761154
})