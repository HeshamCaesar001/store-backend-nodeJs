"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
// import  orderRoutes from '../../../handlers/orders';
const server_1 = __importDefault(require("../../server"));
const mainServer = 'http://localhost:3000';
// order routes
const orderProducts = 'http://localhost:3000/orders/:id/products';
const userOrders = 'http://localhost:3000/user/:id/orders';
// product routes
const allProducts = 'http://localhost:3000/prouducts';
const showProduct = 'http://localhost:3000/product/:id';
const createProduct = 'http://localhost:3000/products';
const deleteProduct = 'http://localhost:3000/product/:id';
//user routes
const allUsers = 'http://localhost:3000/users';
const showUser = 'http://localhost:3000/user/:id';
const createUser = 'http://localhost:3000/users';
const authUser = 'http://localhost:3000/user/auth';
describe('check if server reached', () => {
    it('server should be reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).get(mainServer).expect(200);
    });
});
describe('check if order endPints reached ', () => {
    it('order products endpoint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).post(orderProducts).expect(200);
    });
    it('user orders endPoint api reached with 200 ok  status', () => {
        (0, supertest_1.default)(server_1.default).get(userOrders).expect(200);
    });
});
describe('check if users endPints reached', () => {
    it('getting all users endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).get(allUsers).expect(200);
    });
    it('show the correct  user endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).get(showUser).expect(200);
    });
    it('create new  user endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).post(createUser).expect(200);
    });
    it('auth the user endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).post(authUser).expect(200);
    });
});
describe('check if product endPints reached', () => {
    it('getting all products endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).get(allProducts).expect(200);
    });
    it('show the correct  product endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).get(showProduct).expect(200);
    });
    it('create new  product endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).post(createProduct).expect(200);
    });
    it('delete the correct product endPint api reached with 200 ok status', () => {
        (0, supertest_1.default)(server_1.default).delete(deleteProduct).expect(200);
    });
});
