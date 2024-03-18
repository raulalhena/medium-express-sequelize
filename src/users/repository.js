import { User } from "./entities/User.entity.js";

const findAll = async () => {
    const users = await User.findAll();
    return users;
}

const findOneById = async (id) => {
  return await User.findOne({ where: { id: id }});
}

const create = async(user) => {
  const newUser = await User.create(user);
  return newUser;
}

export const userRepository ={  
  findAll,
  findOneById,
  create
}