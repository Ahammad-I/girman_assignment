

import express from 'express';
import { postController } from '../controllers/postController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/posts', auth, postController.createPost);
router.get('/posts', auth, postController.getPosts);
router.get('/posts/:id', auth, postController.getPostById);
router.put('/posts/:id', auth, postController.updatePost);
router.delete('/posts/:id', auth, postController.deletePost);

export default router;
