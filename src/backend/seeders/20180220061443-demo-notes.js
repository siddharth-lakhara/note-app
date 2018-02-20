

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notes', [{
    keyid: 1,
    title: 't1',
    message: 'msg1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notes', null, {}),
};
