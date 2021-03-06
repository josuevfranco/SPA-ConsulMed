require('./config/conexion');
const express = require('express');
const port = (process.env.port || 3000);


const app = express();

//configurar
app.set('port',port);
app.use(express.json());

//rutas
app.use('/api', require('./rutas'));


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
})
