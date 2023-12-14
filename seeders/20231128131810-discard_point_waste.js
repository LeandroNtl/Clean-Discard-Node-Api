'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('DiscardPointWastes', [
      {
        discard_point_id: 1,
        waste_id: 1,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        discard_point_id: 1,
        waste_id: 2,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        discard_point_id: 2,
        waste_id: 2,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        discard_point_id: 2,
        waste_id: 1,
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('DiscardPointWastes', null, {});
  }
};
