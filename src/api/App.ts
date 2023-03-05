import express, { Express } from 'express';
import dotenv from 'dotenv';
import allAppRoutes from './controllers/index.js'
  
dotenv.config();
const app: Express = express();

const router = express.Router() 
allAppRoutes.map(routes => routes(router))
app.use(`/${process.env.API_ROUTE}`, router)

app.listen(process.env.PORT, () => { 
  console.log(`🔥 [server]: Server działa na porcie ${process.env.PORT}`);
}); 