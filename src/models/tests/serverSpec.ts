import request from 'supertest';
// import  orderRoutes from '../../../handlers/orders';
import app from '../../server';
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
    request(app).get(mainServer).expect(200);
  });
});
describe('check if order endPints reached ', () => {
  it('order products endpoint api reached with 200 ok status', () => {
    request(app).post(orderProducts).expect(200);
  });
  it('user orders endPoint api reached with 200 ok  status', () => {
    request(app).get(userOrders).expect(200);
  });
});

describe('check if users endPints reached', () => {
  it('getting all users endPint api reached with 200 ok status', () => {
    request(app).get(allUsers).expect(200);
  });
  it('show the correct  user endPint api reached with 200 ok status', () => {
    request(app).get(showUser).expect(200);
  });
  it('create new  user endPint api reached with 200 ok status', () => {
    request(app).post(createUser).expect(200);
  });
  it('auth the user endPint api reached with 200 ok status', () => {
    request(app).post(authUser).expect(200);
  });
});

describe('check if product endPints reached', () => {
  it('getting all products endPint api reached with 200 ok status', () => {
    request(app).get(allProducts).expect(200);
  });
  it('show the correct  product endPint api reached with 200 ok status', () => {
    request(app).get(showProduct).expect(200);
  });
  it('create new  product endPint api reached with 200 ok status', () => {
    request(app).post(createProduct).expect(200);
  });
  it('delete the correct product endPint api reached with 200 ok status', () => {
    request(app).delete(deleteProduct).expect(200);
  });
});
