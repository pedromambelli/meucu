const mongoose = require('mongoose');
const {Schema} = mongoose;

const MateriaSchema = new Schema({
  codigo : {type: String, required: true}
  ,nome : {type: String, required: true}
  , creditos : {type: String, required: true}
  , requisitos_fortes : [{type: String, required: true}]
  , requisitos_minimos : [{type: String, required: true}]
  , correquisitos : [{type: String, required: true}]
  , modulo : {type: String, required: true}
});

module.exports = mongoose.model('Materia', MateriaSchema);
