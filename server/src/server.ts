import express from "express";
const app : express.Application = express();
// routes
import generate from './routes/generate';

app.use('/api/generate', generate);

app.listen(3000, () => console.log('Listening'))
