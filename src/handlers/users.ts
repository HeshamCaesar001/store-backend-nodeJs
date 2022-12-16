import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import Jwt from 'jsonwebtoken';
import verifyAuthToken from '../middleware/middleware';
const store = new UserStore();
// get secret token for jwt
const secret = process.env.TOKEN_SECRET as string;

const showUser = async (req: Request, res: Response) => {
  const user = await store.show(parseInt(req.params.id));
  res.json(user);
};

const index = async (_req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};

const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
    };

    const newUser = await store.create(user);
    const token = Jwt.sign({ user: newUser }, secret);
    res.json(token);
    // res.json(newUser);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const auth = async (req: Request, res: Response) => {
  try {
    const user: User = {
      first_name: req.body.first_name,
      password: req.body.password,
    };

    const existUser = await store.authenticate(user.first_name, user.password);
    const token = Jwt.sign({ user: existUser }, secret);
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};
const users_routes = (app: express.Application) => {
  app.get('/users', verifyAuthToken, index);
  app.get('/user/:id', verifyAuthToken, showUser);
  app.post('/users', verifyAuthToken, create);
  app.post('/user/auth', auth);
};

export default users_routes;
