const router = require('express').Router();
const conexion = require('./config/conexion');

// Rutas

//Conseguir Información de Médicos
router.get('/',(req, res)=>{
    let sql ='select * from medico'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

//Conseguir Información de Pacientes
router.get('/pac',(req, res)=>{
    let sql ='select * from paciente'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

//Conseguir un Médico en Específico
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from medico where idMed = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//Conseguir un Paciente en Específico
router.get('/paciente/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from paciente where idPac = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//Agregar un Médico
router.post('/',( req, res)=>{
    const{nombre,apellido,correo,especialidad,usrname, contrasena} = req.body

    let sql = `insert into medico(nombre,apellido,correo,especialidad,usrname, contrasena) values('${nombre}','${apellido}','${correo}','${especialidad}','${usrname}','${contrasena}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Médico Agregado'})
        }
    })
})

//Agregar un Paciente
router.post('/paciente',( req, res)=>{
    const{nombre,apellido,correo,usrname, contrasena,edad, genero} = req.body

    let sql = `insert into paciente(nombre,apellido,correo,usrname,contrasena,edad,genero) values('${nombre}','${apellido}','${correo}','${usrname}','${contrasena}','${edad}','${genero}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Paciente Agregado'})
        }
    })
})

//Modificar un Paciente
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{signos, historial} = req.body

    let sql = `update paciente set 
                signos ='${signos}',
                historial='${historial}'
                where idPac = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Paciente modificado'})
        }
    })

})

//Eliminar un Paciente
router.delete('/pac/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from paciente where idPac = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Paciente eliminado'})
        }
    })
})

//Eliminar un Médico
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from medico where idMed = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Medico eliminado'})
        }
    })
})


module.exports = router;