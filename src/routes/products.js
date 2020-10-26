import express from 'express';
import ProductsController from'../controllers/products/ProductsController.js';

const router = express.Router();

const productsController = new ProductsController();
router.get('/', (req,res) => productsController.get(req,res));


export default router;