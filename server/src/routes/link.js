
import express from 'express';
import { getLinks, hashLink } from '../controllers/link'
const router = express.Router();

/* GET users listing. */
router.get('/', getLinks);
router.post('/create', hashLink);

export default router
