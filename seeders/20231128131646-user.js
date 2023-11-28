'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('Users', [
      {
        status: true,
        role: 1,
        name: 'admin',
        username: 'admin',
        password: 'admin',
        email: 'admin@gmail.com',
        score: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        status: true,
        role: 2,
        name: 'Carlos',
        username: 'carlos',
        password: 'carlos',
        email: 'carlos@gmail.com',
        score: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        status: true,
        role: 2,
        name: 'Maria',
        username: 'maria',
        password: 'maria',
        email: 'maria@gmail.com',
        score: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
