import { Router } from 'express';
const productRoutes = new Router();

/*
 * controller
 */
import productController from '../controllers/product.controller.mjs';

/*
 * define route
 */
productRoutes.get('/', productController.getAllProducts);

export default productRoutes;
