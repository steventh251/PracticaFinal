const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:Steventh20@cluster0.aj6kf.mongodb.net/test';



mongoose.connect(URL, {
  
  //useNewUrlParse: true,
  useUnifiedTopology: true
})

.then(db => console.log('Conexion exitosa a la base de datos'))
.catch(err => console.log('Error de conexion a la DB: ' + err));

module.exports = mongoose;

