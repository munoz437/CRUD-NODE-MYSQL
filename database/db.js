var mysql      = require('mysql');
var conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'crud_nodejs_db'
});
 
conexion.connect((error)=>{
    if (error) {
        console.error('Erro es:'+error);
        return
    }
    console.log('Conexcion exitosa');
})

module.exports=conexion;
 
