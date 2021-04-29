const { Router } = require('express')
const Pessoacontroller = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

const router = Router()

router
.get('/pessoas', Pessoacontroller.listar)
.get('/pessoas/ativas', Pessoacontroller.listarAtivos)
.get('/pessoas/:id', Pessoacontroller.detalhar)
.get('/pessoas/:estudanteId/matricula', Pessoacontroller.detalharMatriculaPorEstudante)
.post('/pessoas', Pessoacontroller.criar)
.post('/pessoas/:id/restaurar', Pessoacontroller.restaurar)
.post('/pessoas/:estudanteId/cancela', Pessoacontroller.cancelaPessoaEMatricula)
.put('/pessoas/:id', Pessoacontroller.atualizar)
.delete('/pessoas/:id', Pessoacontroller.deletar)
.get('/pessoas/matricula/:turmaId/confirmados', MatriculaController.detalharMatriculaPorTurma)
.get('/pessoas/matricula/lotada', MatriculaController.detalharTurmasLotadas)
.get('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.detalharMatricula)
.post('/pessoas/:estudanteId/matricula', MatriculaController.criarMatricula)
.post('/pessoas/:estudanteId/matricula/:matriculaId/restaurar', MatriculaController.restaurarMatricula)
.put('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.atualizarMatricula)
.delete('/pessoas/:estudanteId/matricula/:matriculaId', MatriculaController.deletarMatricula)


module.exports = router