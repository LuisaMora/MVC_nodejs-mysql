const express = require("express");
const app = express();
const userRoute = require('./routes/Roouter');
 
 app.set("views engine",'ejs');

 app.use('/',userRoute);

 app.listen(3000,()=>{
    console.log("hoaaaa port 3000")
 });

 