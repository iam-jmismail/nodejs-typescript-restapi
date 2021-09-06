import express, { IRouter} from 'express';
const router:IRouter = express.Router();

// Routes
import TodoRoute from './todo'

router.use('/user', TodoRoute)

export default router;

