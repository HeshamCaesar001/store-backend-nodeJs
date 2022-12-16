import client from '../database';
export type Order = {
  status: string;
  user_id?: number;
};

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      const connection = await client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await connection.query(sql);
      connection.release();
      return result.rows;
    } catch (err) {
      throw new Error(`could not get products Error ${err}`);
    }
  }

  async show(id: number): Promise<Order> {
    try {
      const connection = await client.connect();
      const sql = `SELECT * FROM orders WHERE id = $1`;
      const result = await connection.query(sql, [id]);
      connection.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`could not find product${id}.Error:${err}`);
    }
  }

  async addProduct(
    quantity: number,
    orderId: number,
    productId: number
  ): Promise<Order> {
    try {
      const sql =
        'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
      const conn = await client.connect();

      const result = await conn.query(sql, [quantity, orderId, productId]);

      const order = result.rows[0];

      conn.release();
      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}: ${err}`
      );
    }
  }

  async getUserOrders(id: number): Promise<Order[]> {
    try {
      const conn = await client.connect();
      const sql = ' SELECT * FROM orders WHERE user_id=$1';
      const reuslt = await conn.query(sql, [id]);
      conn.release();
      return reuslt.rows;
    } catch (error) {
      throw new Error(`can't get that user orders`);
    }
  }
}
