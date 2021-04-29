'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'John@Doe.com',
        role: 'estudante',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        nome: 'Maria gomes',
        ativo: true,
        email: 'maria@gomes.com',
        role: 'estudante',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        nome: 'João da neve',
        ativo: true,
        email: 'js@neve.com',
        role: 'estudante',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        nome: 'paulo vai',
        ativo: true,
        email: 'eu@ela.com',
        role: 'estudante',
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
