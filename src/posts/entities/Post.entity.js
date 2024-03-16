import { Sequelize } from "sequelize";
import {sequelize }  from "../../db/db.config";

export const Post = sequelize.define('post', {
  id: {
    type: Sequelize.Integer,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.String
  },
  content: {
    type: Sequelize.String
  }
});