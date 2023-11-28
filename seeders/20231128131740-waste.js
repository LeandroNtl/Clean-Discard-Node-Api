'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('Wastes', [
      {
        name: 'Baterias',
        description: 'Baterias de celulares, pilhas e baterias de carro',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Eletrônicos',
        description: 'Celulares, computadores, televisores, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Lâmpadas',
        description: 'Lâmpadas fluorescentes, incandescentes, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Papel',
        description: 'Papel, papelão, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Plástico',
        description: 'Garrafas pet, sacolas, etc',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Vidro',
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
