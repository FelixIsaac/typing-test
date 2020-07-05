"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const path_1 = __importDefault(require("path"));
const connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(compression_1.default());
app.disable('x-powered-by');
// front end
if (process.env.NODE_ENV === "production") {
    const staticClientMiddleware = express_1.default.static(path_1.default.resolve("client"));
    app.use(staticClientMiddleware);
    app.use(connect_history_api_fallback_1.default());
    app.use(staticClientMiddleware);
}
;
// routes
const generate_1 = __importDefault(require("./routes/generate"));
app.use('/api/generate', generate_1.default);
app.listen(3000, () => console.log('Listening'));
//# sourceMappingURL=server.js.map