'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('Wastes', [
      {
        name: 'baterias',
        description: 'Baterias de celulares, pilhas e baterias de carro',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'eletronicos',
        description: 'Celulares, computadores, televisores, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'lampadas',
        description: 'Lâmpadas fluorescentes, incandescentes, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'papel',
        description: 'Papel, papelão, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'plastico',
        description: 'Garrafas pet, sacolas, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'vidro',
        description: 'Garrafas, copos, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wastes', null, {});
  }
};
