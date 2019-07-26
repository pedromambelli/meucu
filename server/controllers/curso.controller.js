const cursoCtrl = {}
const Curso = require('../models/curso');

// List method
cursoCtrl.getCursos = async (req, res) => {

  const cursos = await Curso.find();
  res.json(cursos);
};


// View method
cursoCtrl.getCurso = async (req, res) => {
  const curso = await Curso.find({Cod:'10'});
  res.json(curso);
};

// // Create method
// cursoCtrl.createCurso = async (req, res) => {
//   const curso = new Curso(req.body);
//   await curso.save();
//   res.json({
//     status:"Criado com sucesso"
//   });
// };


// Edit method
// cursoCtrl.editCurso = async (req, res) => {
//   const { id } = req.params;
//   const curso = {
//     nome: req.body.nome
//     , matricula: req.body.matricula
//     , login: req.body.login
//   };
//   await Curso.findByIdAndUpdate(id, {$set: curso}, {new:true});
//   res.json({
//     status:"Editado com sucesso"
//   });
// };

// Delete method
// cursoCtrl.deleteCurso =  async(req, res) => {
//   const { id } = req.params;
//   await Curso.findByIdAndRemove(id);
//   res.json({
//     status:"Removido com sucesso"
//   });
// };


module.exports = cursoCtrl;
