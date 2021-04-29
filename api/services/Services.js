const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async listar(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } })
    }

    async detalhar(where = {}) {
        return database[this.nomeDoModelo].findOne({ where: { ...where } })
    }

    async criar(dados) {
        return database[this.nomeDoModelo].create(dados)
    }

    async atualizar(dados, id, transacao = {}) {
        return database[this.nomeDoModelo]
        .update(dados, { where: { id: id } }, transacao)
    }

    async atualizarStatusMatricula(dados, where, transacao = {}) {
        return database[this.nomeDoModelo]
      .update(dados, { where: { ...where } }, transacao)
    }

    async deletar(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } })
      }

    async restauraRegistro(id) {
        return database[this.nomeDoModelo].restore({ where: { id: id } })
    }
    
    async consultaRegistroApagado(id) {
    return database[this.nomeDoModelo]
        .findOne({ paranoid: false, where: { id: Number(id) } })
    }
    
    async encontraEContaRegistros(where = {}, agregadores) {
    return database[this.nomeDoModelo]
        .findAndCountAll({ where: { ...where }, ...agregadores })
    }
}

module.exports = Services