const express = require('express');
const router = express.Router();
//const controller=require('../controllers/UserControllers')
//const conexion =require('../database/db');

router.get('/',(req,res)=>{
    res.render('home')
/*     conexion.query('SELECT * FROM users',(error,results)=>
    {
        throw error;
        if(error){
        }
        else{
            res.send(results);
        }
    }) */
});
router.get('/registro',(req,res)=>{
    res.render('registro');
})


module.exports=router;