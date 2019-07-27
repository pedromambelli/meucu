const express = require('express');
const router = express.Router();
const curso = require('../controllers/curso.controller');

router.get('/', curso.getCursos);
router.get('/:id', curso.getCurso);
// router.post('/', curso.createCurso);
// router.put('/:id', curso.editCurso);
// router.delete('/:id', curso.deleteCurso);


module.exports = router;
