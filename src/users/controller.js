import { userService } from './service.js';

// GET:

const findAll = (req, res) => {
  res.status(200).json(userService.findAll());
}

const findOneById = (req, res) => {
  res.status(200).json(userService.findOneById(+req.params.id));
}

// END GET

// POST:

const create = (req, res) => {
  res.status(201).json(userService.create(req.body));
}

// END POST

export const userController = {
  findAll,
  findOneById,
  create
}