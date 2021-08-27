// import libs
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import rfs from 'rotating-file-stream';
import path from 'path';
import { config } from 'dotenv';
config();

// run database connection
import ConnectDatabase from './src/models/db.config.mjs';
ConnectDatabase();

// import components
import rootRoute from './src/routes/router.mjs';

// defined variable
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENVIRONMENT === 'production';
const __dirname = path.resolve();

const app = express();
app.enable('trust proxy');
// use middleware
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs'),
});
app.use(
  isProduction
    ? morgan('combined', { stream: accessLogStream })
    : morgan('tiny'),
);

app.use(helmet());
app.use(cors());
app.use(json());

// defined route
app.use('/api', rootRoute);

app.get('/', (req, res) => {
  res.status(404).json({
    message: '404, Page not Found!',
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: '404, Page not Found!',
  });
});

// run server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
