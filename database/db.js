const mysql = require('mysql');

const conexion =mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'Furiosa1234#',
    database:'gasto_web'
})

conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion es: '+error);
        return
    }
    console.log('Conectado con exito')
})

module.exports = conexion;