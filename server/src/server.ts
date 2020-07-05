import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import history from "connect-history-api-fallback";
const app : express.Application = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.disable('x-powered-by')

// front end
if (process.env.NODE_ENV === "production") {
    const staticClientMiddleware = express.static(path.resolve("client"));

    app.use(staticClientMiddleware);
    app.use(history());
    app.use(staticClientMiddleware);
};

// routes
import generate from './routes/generate';
app.use('/api/generate', generate);

app.listen(3000, () => console.log('Listening'))
