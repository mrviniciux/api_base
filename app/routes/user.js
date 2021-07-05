import express from 'express';
import { create, findAll, findAllPublished, findOne, update, deleteOne, deleteAll } 
      from'../controllers/base.js';

const router = express.Router();
const db = require("../models");
const model = db.User;
const strEntity = 'users';


router.get("/", (req, res) => findAll(req, res, model, strEntity));
router.get("/:id", (req, res) => findOne(req, res, model, strEntity));

export default router;