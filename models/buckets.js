const Sequelize = require('sequelize');
const sequelize = require('./index');

const bucket = {
     id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
     },
     bucketName: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
     },
     token: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
     },
};
sequelize.define('bucket', bucket);
return bucket;
