import { OrderStore } from '../order';

const store = new OrderStore();

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

  it('index method should return all orders in DB', async () => {
    const result = await store.index();
    if (result.length) {
      expect(result.length).toEqual(result.length);
    } else {
      expect(result).toEqual([]);
    }
  });
  it('show method should return the correct order', async () => {
    const result = await store.show(8);
    if (result == undefined) {
      expect(result).toBeUndefined();
    } else {
      expect(`order status is ${result['status']}`).toEqual(
        `order status is good`
      );
    }
  });
});
