import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { verifyJWT } from './src/mvc/middlewares/auth';
import authRoute from './src/mvc/routes/auth.routes';
import userRoute from './src/mvc/routes/user.routes';
import db from './src/init/db';


dotenv.config();
const PORT = 4000

const app: Express = express();

// Configure CORS with specific options
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Apply CORS middleware before any routes
app.use(cors(corsOptions));
db()
app.use(express.json());
app.use('/api', authRoute);
app.use('/api', verifyJWT, userRoute);

app.get('/', (req, res) => {
  res.send('Server is calling ');
});

app.all('*', (req, res) => {
  res.status(404).send({
    error: true,
    code: 404,
    msg: 'Api Not Found',
  });
});

app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
});
export default app;

