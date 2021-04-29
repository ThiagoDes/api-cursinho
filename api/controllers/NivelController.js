const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {

  static async listar(req, res){
    try {
      const niveis = await niveisServices.listar()
      return res.status(200).json(niveis)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async detalhar(req, res) {
    const { id } = req.params
    try {
      const nivel = await niveisServices.detalhar({id})
      return res.status(200).json(nivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criar(req, res) {
    const newNivel = req.body
    try {
      const newNivelCreate = await niveisServices.criar(newNivel)
      return res.status(200).json(newNivelCreate)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizar(req, res) {
    const { id } = req.params
    const nivelUpdate = req.body
    try {
      await niveisServices.atualizar(id, nivelUpdate)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletar(req, res) {
    const { id } = req.params
    try {
      await niveisServices.deletar(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restaurar(req, res) {
    const { id } = req.params

    try {
        await niveisServices.restauraRegistro(id)
        return res.status(200).json({mensagem: `id ${id} restaurado`})
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

}

module.exports = NivelController