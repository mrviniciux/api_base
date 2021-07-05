import express from 'express';
import userRoute from './user.js';
import { verifyJWT } from '../controllers/auth';
import authRoute from './auth.js';

require("dotenv-safe").config();

const router = express.Router();

router.use('/auth', authRoute);
router.use('/api/users', verifyJWT,    userRoute);
router.get('/', (req, res, next) => res.send('Welcome to api_base'));


export default router;

