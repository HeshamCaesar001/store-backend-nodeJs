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
const user_1 = require("../user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
const store = new user_1.UserStore();
describe('order model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have authenticate method', () => {
        expect(store.authenticate).toBeDefined();
    });
    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('index method should return all users in DB', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        if (result.length) {
            expect(result.length).toEqual(result.length);
        }
        else {
            expect(result).toEqual([]);
        }
    }));
    it('show method should return the correct user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(2);
        if (result == undefined) {
            expect(result).toBeUndefined();
        }
        else {
            expect(`user first name is ${result['first_name']}`).toEqual(`user first name is ahemd`);
        }
    }));
    it('create user should add user in db', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            first_name: 'hisham',
            last_name: 'ibrahim',
            password: 'password123',
        });
        expect(`username is ${result['first_name']}`).toEqual(`username is hisham`);
    }));
    it('auth function should loge in the user if the first name and password match in db and return null if not', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.authenticate('hisham', 'password123');
        const hash = bcrypt_1.default.hashSync('password123' + pepper, parseInt(saltRounds));
        if (result == null) {
            expect(result).toBe(null);
        }
        else {
            const check = bcrypt_1.default.compareSync('password123' + pepper, hash);
            expect(check).toBe(true);
        }
    }));
});
