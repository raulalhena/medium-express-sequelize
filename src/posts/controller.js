import { postService } from './service.js';

const findAll = (req, res) => {
  res.status(200).json(postService.findAll());
}

const findOneById = (req, res) => {
  res.status(200).json(postService.findOneById(+req.params.id));
}

const create = (req, res) => {
  res.status(201).json(postService.create(req.body));
}

export const postController = {
  findAll,
  findOneById,
  create
}