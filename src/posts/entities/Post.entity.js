import { Sequelize } from "sequelize";
import { sequelize }  from "../../db/db.config.js";

export const Post = sequelize.define('post', 
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
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