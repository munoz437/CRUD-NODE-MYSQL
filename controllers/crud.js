const conexion = require('../database/db');

exports.save=(req,res)=>{
    //OBTIENE LOS DATOS DEL FORMULARIO
    const user=req.body.user;
    const rol=req.body.rol;
   // console.log(user+"-"+rol);//mostrando los valores
   //primero como se llama en la base
   conexion.query('INSERT INTO users SET ?',{user:user,roll:rol},(error,results)=>{
    if (error){
        console.log(error);
    } else{
      res.redirect('/');
    }
   })
};

exports.update=(req,res)=>{
    //OBTIENE LOS DATOS DEL FORMULARIO
    const id=req.body.id;
    const user=req.body.user;
    const rol=req.body.rol;
   //primero como se llama en la base
   conexion.query('UPDATE users SET ? where id = ?',[{user:user,roll:rol},id],(error,results)=>{
    if (error){
        console.log(error);
    } else{
      res.redirect('/');
    }
   })
};