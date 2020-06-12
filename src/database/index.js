const Sequelize = require('sequelize')

const Student = require('../app/models/Student')
const Log = require('../app/models/Log')

const { development } = require('../config/database')

const models = [Student, Log]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(development);

    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database()
