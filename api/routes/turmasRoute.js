const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router
 .get('/turmas', TurmaController.listar)
 .get('/turmas/:id', TurmaController.detalhar)
 .post('/turmas', TurmaController.criar)
 .put('/turmas/:id', TurmaController.atualizar)
 .delete('/turmas/:id', TurmaController.deletar)
 .post('/turmas/:id/restaurar', TurmaController.restaurar)

module.exports = router