const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Student extends Model {
  static init(sequelize) {
    super.init({
      idTelegram: Sequelize.INTEGER,
      name: Sequelize.STRING,
      watsonSession: Sequelize.STRING
    },
      {
        sequelize
      });

    return this;
  }
}

module.exports = Student
