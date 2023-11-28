'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('DiscardPoints', [
      {
        name: 'Ponto de descarte 1',
        description: 'Ponto de descarte 1',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de descarte 2',
        description: 'Ponto de descarte 2',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de descarte 3',
        description: 'Ponto de descarte 3',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de descarte 4',
        description: 'Ponto de descarte 4',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de descarte 5',
        description: 'Ponto de descarte 5',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Ponto de descarte 6',
        description: 'Ponto de descarte 6',
        status: 'ativo',
        latitude: -23.5489,
        longitude: -46.6388,
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
