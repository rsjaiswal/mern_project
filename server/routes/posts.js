import express from 'express';

const router = express.Router();

import { getPost, createPost } from '../controllers/posts.js';
//http://localhost:5000/posts

router.get('/', getPost);
router.get('/', createPost);

export default router;
