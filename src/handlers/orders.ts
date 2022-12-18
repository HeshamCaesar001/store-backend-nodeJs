import express, { Request, Response } from 'express';
import { OrderStore } from '../models/order';
import verifyAuthToken from '../middleware/middleware';

const store = new OrderStore();
const orderRoutes = (app: express.Application): void => {
  app.post('/orders/:id/products', verifyAuthToken, addProducts);
  app.get('/user/:id/orders', verifyAuthToken, usersOrders);
};

const addProducts = async (req: Request, res: Response) => {
  const order_id: number = parseInt(req.params.id);
  const product_id: number = parseInt(req.body.productId);
  const quantity: number = parseInt(req.body.quantity);

  try {
    const addedProduct = await store.addProduct(quantity, order_id, product_id);
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.send(`could not work`);
  }
};
const usersOrders = async (req: Request, res: Response) => {
  try {
    const user_id = parseInt(req.params.id);
    const orders = await store.getUserOrders(user_id);
    res.json(orders);
  } catch (error) {
    res.status(400);
    res.send('error in handler');
  }
};

export default orderRoutes;
