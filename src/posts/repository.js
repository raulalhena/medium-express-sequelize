import { posts } from "../../data/posts.js";

const findAll = () => {
    return posts;
}

const findOneById = (id) => {
  return posts.find(post => post.id === id);
}

const create = (post) => {
  post.id = posts.length + 1;
  posts.push(post);
  return posts.slice(-1)[0];
}

export const postRepository ={
  findAll,
  findOneById,
  create
}