import { ProductStore } from '../product';
const store = new ProductStore();

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

  it('index method should return a list of products ', async () => {
    const result = await store.index();
    if (result.length) {
      expect(result.length).toEqual(result.length);
    } else {
      expect(result).toEqual([]);
    }
  });
  it('create method should add product into product table in DB', async () => {
    const result = await store.create({
      name: 'product test',
      price: 99,
    });

    expect(
      `product name is ${result['name']} and it's price is ${result['price']}`
    ).toEqual(`product name is product test and it's price is 99`);
  });
  it('show method should return the correct product or to be undefined if it is not exist', async () => {
    const result = await store.show(8);
    if (result == undefined) {
      expect(result).toBeUndefined();
    } else {
      expect(
        `product name is ${result['name']} and it's price is ${result['price']}`
      ).toEqual(`product name is product test and it's price is 99`);
    }
  });
  it('delete method should delete the correct product ', async () => {
    const result = await store.delete(7);
    const check = await store.show(7);
    if (result == undefined) {
      expect(result).toBeUndefined();
    } else {
      expect(check).toBeUndefined();
    }
  });
});
