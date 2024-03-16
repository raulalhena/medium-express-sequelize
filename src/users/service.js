import { userRepository } from './repository.js';
import { postService } from '../posts/service.js';

const findAll = () => {
    const users = userRepository.findAll();
    return {
      users: users
    }
}

const findOneById = (id) => {
  const user = userRepository.findOneById(id);
  const posts = findUserPosts(user.posts);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    posts: posts
  }
}

const findUserPosts = (createdPosts) => {
  const { posts } = postService.findAll();
  const userPosts = createdPosts.map(post => {
    return posts.find(inPost => inPost.id === post);
  });
  return userPosts;
}

const create = (userObj) => {
  const newUser = userRepository.create(userObj);
  return {
    user: newUser
  }
}

const addPostToUser = (userId, postId) => {
  userRepository.addPostToUser(userId, postId);
}

export const userService = {
  findAll,
  findOneById,
  create,
  addPostToUser
}