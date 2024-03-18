import { userService } from '../users/service.js';
import { postRepository } from './repository.js';

const findAll = async () => {
    const posts = await postRepository.findAll();
    return {
      posts: posts
    }
}

const findOneById = async (id) => {
  const post = await postRepository.findOneById(id);
  return {
    post: post
  }
}

const findUserPosts = async (userId) => {
  const userPosts = await postRepository.findUserPosts(userId);
  return userPosts;
}

const create = async (post) => {
  const newPost = await postRepository.create(post);
  return {
    post: newPost
  }
}

export const postService = {
  findAll,
  findOneById,
  create,
  findUserPosts
}