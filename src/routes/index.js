import express from 'express';
import productsRoute from './products.js';
const router = express.Router(); 

router.use('/products', productsRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
