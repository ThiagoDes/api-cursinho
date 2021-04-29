const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
 .get('/niveis', NivelController.listar)
 .get('/niveis/:id', NivelController.detalhar)
 .post('/niveis', NivelController.criar)
 .put('/niveis/:id', NivelController.atualizar)
 .delete('/niveis/:id', NivelController.deletar)
 .post('/niveis/:id/restaurar', NivelController.restaurar)

module.exports = router