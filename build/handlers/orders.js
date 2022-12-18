"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const middleware_1 = __importDefault(require("../middleware/middleware"));
const store = new order_1.OrderStore();
const orderRoutes = (app) => {
    app.post('/orders/:id/products', middleware_1.default, addProducts);
    app.get('/user/:id/orders', middleware_1.default, usersOrders);
};
const addProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order_id = parseInt(req.params.id);
    const product_id = parseInt(req.body.productId);
    const quantity = parseInt(req.body.quantity);
    try {
        const addedProduct = yield store.addProduct(quantity, order_id, product_id);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.send(`could not work`);
    }
});
const usersOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = parseInt(req.params.id);
        const orders = yield store.getUserOrders(user_id);
        res.json(orders);
    }
    catch (error) {
        res.status(400);
        res.send('error in handler');
    }
});
exports.default = orderRoutes;
