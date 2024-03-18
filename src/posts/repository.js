import { Post } from "./entities/Post.entity.js";

const findAll = async () => {
    return await Post.findAll();
}

const findOneById = async (id) => {
  return await Post.findOne({ where: { id: id }});
}

const findUserPosts = async (userId) => {
  return await Post.findAll({ where: { userId: userId }});
}

const create = async (post) => {
  const newPost = await Post.create(post);
  return newPost;
}

export const postRepository ={
  findAll,
  findOneById,
  create,
  findUserPosts
}