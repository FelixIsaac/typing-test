import express from "express";
// @ts-ignore
import cors from 'cors';
const app : express.Application = express();
// routes
import generate from './routes/generate';

app.use(cors());
app.use('/api/generate', generate);

app.listen(3000, () => console.log('Listening'))
