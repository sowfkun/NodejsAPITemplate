import { Router } from 'express';

// import all controllers
import productController from '../controllers/product.controller.mjs';
// import SessionController from './app/controllers/SessionController';

const productRoutes = new Router();

// Add routes
productRoutes.get('/', productController.getAllProducts);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default productRoutes;
