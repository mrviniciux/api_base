import express from 'express';
import { signIn, signOut } from '../controllers/auth';
import { findOne, findAll } from '../controllers/base';
const router = express.Router();
const db = require("../models");
const model = db.ExpiredToken;
const returnName = 'expired_tokens';

router.post('/sign_in', signIn);
router.post('/sign_out', signOut);
router.get('/expiredTokens', (req, res) => findAll(req, res, model, returnName))
router.get('/expiredTokens/:id', (req, res) => findOne(req, res, model, returnName))

export default router;