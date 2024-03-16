import express from 'express';
import { postController } from '../posts/controller.js';

const postRouter = express.Router();

postRouter.get('/', postController.findAll);
postRouter.get('/:id', postController.findOneById);
postRouter.post('/', postController.create);

export default postRouter;