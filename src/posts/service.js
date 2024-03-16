import { userService } from '../users/service.js';
import { postRepository } from './repository.js';

const findAll = () => {
    const posts = postRepository.findAll();
    return {
      posts: posts
    }
}

const findOneById = (id) => {
  const post = postRepository.findOneById(id);
  return {
    post: post
  }
}

const create = (postObj) => {
  const { userId, ...rawPost } = postObj;
  const newPost = postRepository.create(rawPost);
  if(newPost) userService.addPostToUser(userId, newPost.id);
  return {
    post: newPost
  }
}

export const postService = {
  findAll,
  findOneById,
  create
}