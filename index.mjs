/*
 * import libs
 */
import cors from 'cors';
import { config } from 'dotenv';
import express, { json } from 'express';
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import path from 'path';
import rfs from 'rotating-file-stream';
import { Server } from 'socket.io';
/*
 * import components
 */
import rootRoute from './src/routes/router.mjs';

// run dot env config
config();

// run database connection
// ConnectDatabase();

/*
 * defined variable
 */
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENVIRONMENT === 'production';
const __dirname = path.resolve();

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

/*
 * defined socket io
 */
io.on('connection', (socket) => {
  console.log('a user connected');
});

/*
 * use middleware
 */
app.enable('trust proxy');

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs'),
});
app.use(
  isProduction
    ? morgan('combined', { stream: accessLogStream })
    : morgan('tiny'),
);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(json());

/*
 * defined route
 */
app.use('/api', rootRoute);
app.get('/api/test', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

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

/*
 * run server
 */
httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
