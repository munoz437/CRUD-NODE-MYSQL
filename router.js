const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//mostrar los registros
router.get('/', (req, res) => {
  conexion.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('index', { results: results });
    }
  })

})

//crear registros
router.get('/create', (req, res) => {
  /* conexion.query('SELECT * FROM users',(error,results)=>{
   if (error){
       throw error;
   } else{
     res.render('index',{results:results});
   }
  })   */
  res.render('create');

})

//RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req, res) => {

  const id = req.params.id;
  conexion.query('SELECT * FROM users where id=?',[id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render('edit', { user: results[0] });
    }
  })

})//fin editar

//RUTA PARA ELIMINAR
router.get('/delete/:id', (req, res) => {

  const id = req.params.id;
  conexion.query('DELETE  FROM users where id=?',[id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.redirect('/');
    }
  })

})//fin eliminar


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;