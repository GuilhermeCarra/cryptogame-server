import sequelize from 'sequelize';
import DataTypes from 'sequelize';
import connection from '../database/connection.js';

class User extends sequelize.Model { };

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  avatar: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  estimated: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  ranking: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  last_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  }
}, {
  sequelize: connection,
  paranoid: true,
  deletedAt: 'destroyTime',
  modelName: 'user'
});

export default User;
