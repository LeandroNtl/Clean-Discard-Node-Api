'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const currentDate = new Date();
    await queryInterface.bulkInsert('DiscardPoints', [
      {
        name: 'Instituto Federal do Piauí',
        description: 'O Instituto Federal do Piauí (IFPI) é uma instituição de educação superior, básica e profissional, pluricurricular e multicampi, especializada na oferta de educação profissional e tecnológica nas diferentes modalidades de ensino, com base na conjugação de conhecimentos técnicos e tecnológicos com as suas práticas pedagógicas, voltadas para a capacitação do cidadão para o exercício profissional.',
        status: 'ativo',
        latitude: -10.430168, 
        longitude: -45.173693,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'Smart Informática',
        description: 'A Smart Informática é uma empresa que atua no ramo de informática, oferecendo serviços de manutenção de computadores, notebooks, impressoras, redes, etc.',
        status: 'ativo',
        latitude: -10.4387582,
        longitude: -45.1604799,
        evaluation: 0,
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'ConstruAço',
        description: 'A ConstruAço é uma empresa que atua no ramo de construção civil, oferecendo serviços de construção e reforma de casas, apartamentos, etc.',
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
