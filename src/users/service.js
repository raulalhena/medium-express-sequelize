import { userRepository } from './repository.js';
import { postService } from '../posts/service.js';

const findAll = async () => {
    const users = await userRepository.findAll();
    return {
      users: users
    }
}

const findOneById = async (id) => {
  console.log('user id service ', id)
  const user = await userRepository.findOneById(id);
  const posts = await findUserPosts(id);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    posts: posts
  }
}

const findUserPosts = async (userId) => {
  const userPosts = await postService.findUserPosts(userId);
  return userPosts;
}

const create = async (userObj) => {
  const newUser = await userRepository.create(userObj);
  return {
    user: newUser
  }
}

const addPostToUser = async  (userId, postId) => {
  await userRepository.addPostToUser(userId, postId);
}

export const userService = {
  findAll,
  findOneById,
  create,
  addPostToUser
}