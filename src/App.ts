import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
  
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
 

const users = [
    {
        id: 1,
        name: 'Adam'
    },
    {
        id: 2,
        name: 'Władek'
    }
]

app.get('/', (req: Request, res: Response) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(` 🔥 [server]: Server działa na http://localhost:${port}`); 
});  