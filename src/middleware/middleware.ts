import { Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import { NextFunction } from 'express';

// middleware to make some database actions be for the logged in users only

const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const secret = process.env.TOKEN_SECRET as string;
    const authorizationHeader = req.headers.authorization as string;
    const token = authorizationHeader.split(' ')[1];
    Jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).send('You are not authorized');
  }
};

export default verifyAuthToken;
