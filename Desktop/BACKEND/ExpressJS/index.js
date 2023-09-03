const express = require("express");
const moment = require("moment")
const path = require("path")
const exphbs  = require('express-handlebars');
const app =express();
const members = require("./MembersList")

//Middleware
const logger = ((req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
})
//Init Middleware 
// app.use(logger);

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);


app.get('/',(req,res)=>{
    // res.send("<h1>Hello World !</h1>")
    // res.sendFile(path.join(__dirname,'public','index.html'))

    //Static Folder
    app.use(express.static(path.join(__dirname,'public')))
})



//Member api routes 
app.use("/api/members",require("./routes/api/members"))



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
