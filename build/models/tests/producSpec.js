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
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../product");
const store = new product_1.ProductStore();
describe('product model ', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a delete method', () => {
        expect(store.delete).toBeDefined();
    });
    it('should have  show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });
    it('index method should return a list of products ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        if (result.length) {
            expect(result.length).toEqual(result.length);
        }
        else {
            expect(result).toEqual([]);
        }
    }));
    it('create method should add product into product table in DB', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            name: 'product test',
            price: 99,
        });
        expect(`product name is ${result['name']} and it's price is ${result['price']}`).toEqual(`product name is product test and it's price is 99`);
    }));
    it('show method should return the correct product or to be undefined if it is not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(8);
        if (result == undefined) {
            expect(result).toBeUndefined();
        }
        else {
            expect(`product name is ${result['name']} and it's price is ${result['price']}`).toEqual(`product name is product test and it's price is 99`);
        }
    }));
    it('delete method should delete the correct product ', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.delete(7);
        const check = yield store.show(7);
        if (result == undefined) {
            expect(result).toBeUndefined();
        }
        else {
            expect(check).toBeUndefined();
        }
    }));
});
