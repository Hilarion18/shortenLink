
import express from 'express';
import { getLinks, createLink, deleteAll } from '../controllers/link'
const router = express.Router();

/* GET users listing. */
router.get('/', getLinks);
router.post('/create', createLink);
router.delete('/deleteAll', deleteAll)

export default router
