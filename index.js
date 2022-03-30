
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const {mongoose} = require('./database');

const app = express();
//opcion 2 para mandar a llamar el puerto
//const port = process.env.PORT || 3000;
app.set('port', process.env.PORT || 3000);

//Middlewares librerias y funciones de nuestro serve
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

//Routes
app.use('/api/consolas', require('./routes/consolas.routes'));
//Server
app.listen(app.get('port'), () => {

  console.log('Servidor inicializado en puerto: ' + app.get('port'));
});
