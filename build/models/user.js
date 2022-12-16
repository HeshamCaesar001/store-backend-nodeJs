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
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
class UserStore {
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO users (first_name,last_name,password) VALUES($1,$2,$3) RETURNING *';
                const hash = bcrypt_1.default.hashSync(u.password + pepper, parseInt(saltRounds));
                const result = yield conn.query(sql, [u.first_name, u.last_name, hash]);
                const user = result.rows[0];
                conn.release();
                return user;
            }
            catch (error) {
                throw new Error(`unable to create user ${u.first_name}:${error}`);
            }
        });
    }
    authenticate(firstName, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = 'SELECT password FROM users WHERE first_name=$1 ';
            const result = yield conn.query(sql, [firstName]);
            if (result.rows.length) {
                const user = result.rows[0];
                if (bcrypt_1.default.compareSync(password + pepper, user.password)) {
                    return user;
                }
            }
            return null;
        });
    }
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM users';
                const result = yield conn.query(sql);
                conn.release;
                return result.rows;
            }
            catch (error) {
                throw new Error(`could not retrieve users`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM users WHERE id=$1';
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error('could get that user');
            }
        });
    }
}
exports.UserStore = UserStore;
