const express = require('express');
const app = express();

//const ejs=require('ejs');
const userRoute = require('./routes/Roouter');
 
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
 app.set('view engine','ejs');
//app.set('views',__dirname+'/views');

app.use('/',userRoute);
/*
app.get('/', function(req, res) {
   res.render('home');
 });

 app.get('/about', function(req, res) {
   res.render('about');
 });
*/
 app.listen(3000,()=>{
    console.log("hoaaaa port 3000")
 });

 