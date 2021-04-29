'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Matriculas', [
      {
        status: 'Confirmado',
        estudante_id: 1,
        turma_id: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        status: 'Confirmado',
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        status: 'Confirmado',
        estudante_id: 3,
        turma_id: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        status: 'Confirmado',
        estudante_id: 2,
        turma_id: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
