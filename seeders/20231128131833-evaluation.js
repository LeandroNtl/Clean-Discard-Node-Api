'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('Evaluations', [
      {
        score: 3,
        user_id: 2,
        discard_point_id: 1,
        comment: 'Good',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        score: 4,
        user_id: 3,
        discard_point_id: 1,
        comment: 'Very Good',
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Evaluations', null, {});
  }
};
