const mongoose = require('mongoose');
const {Schema} = mongoose;
const Materia = require('../models/materia').schema;

const CursoSchema = new Schema({
  cod: {type:String, required:true}
  , nome : {type: String, required: true}
  , materias: [Materia]
});

module.exports = mongoose.model('Curso', CursoSchema);
