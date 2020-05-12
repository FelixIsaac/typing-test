import express from "express";
// @ts-ignore
import cors from 'cors';
// @ts-ignore
import helmet from 'helmet';
// @ts-ignore
import compression from 'compression';
const app : express.Application = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.disable('x-powered-by')

// routes
import generate from './routes/generate';
app.use('/api/generate', generate);

app.listen(3000, () => console.log('Listening'))
