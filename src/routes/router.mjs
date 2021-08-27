import express from 'express';
const rootRoute = express();

/*
 * import routes
 */
import productRoutes from './product.router.mjs';

/*
 * use routes
 */
rootRoute.use('/products', productRoutes);

export default rootRoute;
