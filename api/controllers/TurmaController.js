const { TurmasServices } = require('../services')
const turmasService = new TurmasServices()
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class TurmaController {
  static async listar(req, res){
    const { data_inicial, data_final } = req.query
    const where = {}

    data_inicial || data_final ? where.data_inicio = {} : null
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
    data_final ? where.data_inicio[Op.gte] = data_final : null

    try {
      const turmas = await turmasService.listar(where)
      return res.status(200).json(turmas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async detalhar(req, res) {
    const { id } = req.params
    try {
      const turma = await  turmasService.detalhar({id})
      return res.status(200).json(turma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criar(req, res) {
    const newTurma = req.body
    try {
      const newTurmaCreate = await turmasService.criar(newTurma)
      return res.status(200).json(newTurmaCreate)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizar(req, res) {
    const { id } = req.params
    const turmaUpdate = req.body

    try {
      await turmasService.atualizar(turmaUpdate, id)
      return res.status(200).json({ mensagem: `id ${id} atualizado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deletar(req, res) {
    const { id } = req.params
    try {
      await turmasService.deletar(id)
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restaurar(req, res) {
    const { id } = req.params

    try {
        await turmasService.restauraRegistro(id)
        return res.status(200).json({mensagem: `id ${id} restaurado`})
    } catch (error) {
        return res.status(500).json(error.message)
    }
  }

}

module.exports = TurmaController