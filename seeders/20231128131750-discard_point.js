'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('DiscardPoints', [
      {
        name: 'Ponto de Exemplo 1',
        description: 'A Ponto de Exemplo 1 é uma empresa que atua no ramo de informática, oferecendo serviços de manutenção de computadores, notebooks, impressoras, redes, etc.',
        status: 'ativo',
        latitude: -10.4387582,
        longitude: -45.1604799,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de Exemplo 2',
        description: 'A Ponto de Exemplo 2 é uma empresa que atua no ramo de informática, oferecendo serviços de manutenção de computadores, notebooks, impressoras, redes, etc.',
        status: 'ativo',
        latitude: -10.4360377,
        longitude: -45.1625619,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DiscardPoints', null, {});
  }
};
