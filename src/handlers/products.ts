import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import verifyAuthToken from '../middleware/middleware';
const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  const products = await store.index();
  res.json(products);
};

const show = async (req: Request, res: Response) => {
  const product = await store.show(parseInt(req.params.id));
  res.json(product);
};

const create = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
    };

    const newProduct = await store.create(product);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const deleted = await store.delete(parseInt(req.params.id));
  res.json(deleted);
};

const products_routes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/product/:id', show);
  app.post('/products', verifyAuthToken, create);
  app.delete('/product/:id', destroy);
};

export default products_routes;
