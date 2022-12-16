"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./handlers/products"));
const orders_1 = __importDefault(require("./handlers/orders"));
const users_1 = __importDefault(require("./handlers/users"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('hello world');
});
app.use(body_parser_1.default.json());
(0, products_1.default)(app);
(0, orders_1.default)(app);
(0, users_1.default)(app);
app.listen(port, () => {
    console.log(`your server at http://localhost:${port}`);
});
