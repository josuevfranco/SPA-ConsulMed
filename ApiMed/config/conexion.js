const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'consultorio'
});

conexion.connect((err) => {
    if (err) {
        conexion.log('ha ocurrido un error :' + err)
    }
    else { console.log('Conexión exitosa!!!') }
});

module.exports = conexion;