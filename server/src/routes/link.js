
import express from 'express';
import { getLinks, createLink } from '../controllers/link'
const router = express.Router();

/* GET users listing. */
router.get('/', getLinks);
router.post('/create', createLink);

export default router
