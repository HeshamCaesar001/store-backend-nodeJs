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
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * FROM products';
                const result = yield connection.query(sql);
                connection.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`could not get products Error ${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'SELECT * FROM products WHERE id = $1';
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`could not find product${id}.Error:${err}`);
            }
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'INSERT INTO products (name,price) VALUES ($1,$2) RETURNING *';
                const result = yield connection.query(sql, [product.name, product.price]);
                const newProduct = result.rows[0];
                connection.release();
                return newProduct;
            }
            catch (err) {
                throw new Error(`could not add product${name}.Error:${err}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield database_1.default.connect();
                const sql = 'DELETE FROM products WHERE id=$1';
                const result = yield connection.query(sql, [id]);
                connection.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`could not delete product${id}.Error:${err}`);
            }
        });
    }
}
exports.ProductStore = ProductStore;
