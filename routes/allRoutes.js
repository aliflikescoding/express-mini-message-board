import express from 'express';
import { renderRoot, renderNew, renderUsers, sendMessage} from "../controllers/controllers.js";
const router = express.Router();

router.get('/', renderRoot);

router.get('/new', renderNew);

router.get('/users', renderUsers);

router.post('/new', sendMessage);

export default router;