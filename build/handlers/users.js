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
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = __importDefault(require("../middleware/middleware"));
const store = new user_1.UserStore();
// get secret token for jwt
const secret = process.env.TOKEN_SECRET;
const showUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield store.show(parseInt(req.params.id));
    res.json(user);
});
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield store.index();
        res.json(users);
    }
    catch (error) {
        res.status(400);
        res.json(error);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
        };
        const newUser = yield store.create(user);
        const token = jsonwebtoken_1.default.sign({ user: newUser }, secret);
        res.json(token);
        // res.json(newUser);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            first_name: req.body.first_name,
            password: req.body.password,
        };
        const existUser = yield store.authenticate(user.first_name, user.password);
        const token = jsonwebtoken_1.default.sign({ user: existUser }, secret);
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const users_routes = (app) => {
    app.get('/users', middleware_1.default, index);
    app.get('/user/:id', middleware_1.default, showUser);
    app.post('/users', create);
    app.post('/user/auth', auth);
};
exports.default = users_routes;
