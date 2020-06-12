const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Log extends Model {
  static init(sequelize) {
    super.init({
      idTelegram: Sequelize.INTEGER,
      subject: Sequelize.STRING
    },
      {
        sequelize
      });

    return this;
  }
}

module.exports = Log
