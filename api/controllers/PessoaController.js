const { PessoasServices } = require('../services')
const pessoasServices = new PessoasServices()

class PessoaController {
    static async criar(req, res) {
        const newPessoa = req.body

        try {
            const newPessoaCreate = await pessoasServices.criar(newPessoa)
            return res.status(200).json(newPessoaCreate)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listar(req, res) {
        try {
            const arrayPessoas = await pessoasServices.listar()
            return res.status(200).json(arrayPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listarAtivos(req, res) {
        try {
            const arrayPessoas = await pessoasServices.listarAtivos()
            return res.status(200).json(arrayPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async detalhar(req, res) {
        const { id } = req.params
        try {
            const pessoa = await pessoasServices.detalhar({id})
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizar(req, res) {
        const { id } = req.params
        const updatePessoa = req.body

        try {
            await pessoasServices.atualizar(updatePessoa, Number(id))
            return res.status(200).json({ mensagem: `id ${id} atualizado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletar(req, res) {
        const { id } = req.params

        try {
            await pessoasServices.deletar(Number(id))
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurar(req, res) {
        const { id } = req.params

        try {
            await pessoasServices.restauraRegistro(Number(id))

            return res.status(200).json({message: `Matrículas ref. estudante ${id} restaurada.`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async detalharMatriculaPorEstudante(req, res) {
        const { estudanteId } = req.params

        try {
            const matriculas = await pessoasServices.listarMatriculasPorEstudante({ id: Number(estudanteId) })
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cancelaPessoaEMatricula(req, res) {
        const { estudanteId } = req.params

        try {
            await pessoasServices.cancelaPessoaEMatricula(Number(estudanteId))
            return res.status(200).json({message: `Matrículas ref. estudante ${estudanteId} canceladas.`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController