const mongoose = require('mongoose');
const {Schema} = mongoose;

const ConsolasSchema = new Schema({
  marca: {type: String, require: true},
  precio: {type: Number, require: true}
});

module.exports = mongoose.model('consolas', ConsolasSchema);