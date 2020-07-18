const Sequelize = require('sequelize');

function db() {

  return new Sequelize('postgres://botadmin:chatbot@localhost:5432/chatbot', {

    logging: false, 
    native: false, 
  });
}

module.exports = db;

