import client from '../database';

export type Product = {
  name: string;
  price: number;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`could not get products Error ${err}`);
    }
  }

  async show(id: number): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM products WHERE id = $1';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`could not find product${id}.Error:${err}`);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      const connection = await client.connect();

      const sql =
        'INSERT INTO products (name,price) VALUES ($1,$2) RETURNING *';
      const result = await connection.query(sql, [product.name, product.price]);
      const newProduct = result.rows[0];
      connection.release();

      return newProduct;
    } catch (err) {
      throw new Error(`could not add product${name}.Error:${err}`);
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      const connection = await client.connect();
      const sql = 'DELETE FROM products WHERE id=$1';
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`could not delete product${id}.Error:${err}`);
    }
  }
}
