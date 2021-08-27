import express from 'express';

// import routes
import productRoutes from './product.router.mjs';

const rootRoute = express();

rootRoute.use('/products', productRoutes);

export default rootRoute;
