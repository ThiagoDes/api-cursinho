const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor(){
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async listar(where = {}){
        return database[this.nomeDoModelo].scope('listAll').findAll({
            where: {
                ...where
            }
        })
    }

    async listarAtivos(where = {}){
        return database[this.nomeDoModelo].findAll({
            where: {
                ...where
            }
        })
    }

    async cancelaPessoaEMatricula(estudanteId){
        return database.sequelize.transaction(async transacao => {
            await super.atualizar( 
                { ativo : false },
                estudanteId,
                { transaction: transacao }
            )

            await this.matriculas.atualizarStatusMatricula( 
                { status : 'cancelado' },
                { estudante_id: estudanteId },
                { transaction: transacao }
            )
        })
    }

    async listarMatriculasPorEstudante(where = {}) {
        const matriculas = await database[this.nomeDoModelo]
          .findOne({ where: { ...where } })
        return matriculas.getAulasMatriculadas()
    }
}

module.exports = PessoasServices