module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('students', 'watson_session', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('students', 'watson_session');
  }
};
