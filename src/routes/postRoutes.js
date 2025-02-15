

import express from 'express';
import { postController } from '../controllers/postController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, postController.createPost);
router.get('/', auth, postController.getPosts);
router.get('/:id', auth, postController.getPostById);
router.put('/:id', auth, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);

export default router;
