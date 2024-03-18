import { userService } from './service.js';

// GET:

const findAll = async (req, res) => {
  res.status(200).json(await userService.findAll());
}

const findOneById = async (req, res) => {
  res.status(200).json(await userService.findOneById(+req.params.id));
}

// END GET

// POST:

const create = async (req, res) => {
  res.status(201).json(await userService.create(req.body));
}

// END POST

export const userController = {
  findAll,
  findOneById,
  create
}