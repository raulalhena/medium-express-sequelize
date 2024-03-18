import { DataTypes, Sequelize } from "sequelize";
import {sequelize }  from "../../db/db.config.js";

export const User = sequelize.define('user', 
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: 'DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL',
      defaultValue: () => new Date()
    },
    updatedAt: {
      type: 'DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL',
      defaultValue: () => new Date()
    }
  },
  {
    timestamps: false
  }
);

