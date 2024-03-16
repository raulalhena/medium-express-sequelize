import { Sequelize } from "sequelize";
import {sequelize }  from "../../db/db.config";
import { Post } from "../../posts/entities/Post.entity";

export const User = sequelize.define('user', {
  id: {
    type: Sequelize.Integer,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.String
  },
  email: {
    type: Sequelize.String
  },
  posts: {
    type: [Post]
  }
});