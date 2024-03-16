import { users } from "../../data/users.js";

const findAll = () => {
    return users;
}

const findOneById = (id) => {
  return users.find(user => user.id === id);
}

const create = (user) => {
  user.id = users.length + 1;
  user.posts = [];
  users.push(user);
  return users.slice(-1)[0];
}

const addPostToUser = (userId, postId) => {
  users.map(user => {
    if(user.id === userId) user.posts.push(postId);
  });
}

export const userRepository ={
  findAll,
  findOneById,
  create,
  addPostToUser
}