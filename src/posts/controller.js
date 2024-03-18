import { postService } from './service.js';

const findAll = async (req, res) => {
  res.status(200).json(await postService.findAll());
}

const findOneById = async (req, res) => {
  res.status(200).json(await postService.findOneById(+req.params.id));
}

const create = async (req, res) => {
  res.status(201).json(await postService.create(req.body));
}

export const postController = {
  findAll,
  findOneById,
  create
}