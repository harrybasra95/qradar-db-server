const Sequelize = require('sequelize');
const sequelize = require('./index');

const cursor = {
     id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
     },
     curserId: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
     },
     status: {
          type: Sequelize.ENUM,
          values: ['pending', 'completed', 'failed'],
          defaultValue: 'pending',
     },
};
sequelize.define('cursor', cursor);
return cursor;
