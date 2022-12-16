import express from 'express';
import products_routes from './handlers/products';
import orderRoutes from './handlers/orders';
import users_routes from './handlers/users';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use(bodyParser.json());

products_routes(app);
orderRoutes(app);
users_routes(app);

app.listen(port, () => {
  console.log(`your server at http://localhost:${port}`);
});
