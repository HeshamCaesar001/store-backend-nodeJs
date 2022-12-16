"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// middleware to make some database actions be for the logged in users only
const verifyAuthToken = (req, res, next) => {
    try {
        const secret = process.env.TOKEN_SECRET;
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, secret);
        next();
    }
    catch (error) {
        res.status(401).send('You are not authorized');
    }
};
exports.default = verifyAuthToken;
