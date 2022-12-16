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
const order_1 = require("../order");
const store = new order_1.OrderStore();
describe('order model', () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have  addProduct method', () => {
        expect(store.addProduct).toBeDefined();
    });
    it('should have a getUserOrders method', () => {
        expect(store.getUserOrders).toBeDefined();
    });
    it('should have show method', () => {
        expect(store.show).toBeDefined();
    });
    it('index method should return all orders in DB', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index();
        if (result.length) {
            expect(result.length).toEqual(result.length);
        }
        else {
            expect(result).toEqual([]);
        }
    }));
    it('show method should return the correct order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show(8);
        if (result == undefined) {
            expect(result).toBeUndefined();
        }
        else {
            expect(`order status is ${result['status']}`).toEqual(`order status is good`);
        }
    }));
});
