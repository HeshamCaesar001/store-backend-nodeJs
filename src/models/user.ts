import client from '../database';
import bcrypt from 'bcrypt';

export type User = {
  first_name: string;
  last_name?: string;
  password: string;
};

const saltRounds = process.env.SALT_ROUNDS as string;
const pepper = process.env.BCRYPT_PASSWORD as string;

export class UserStore {
  async create(u: User): Promise<User> {
    try {
      const conn = await client.connect();
      const sql =
        'INSERT INTO users (first_name,last_name,password) VALUES($1,$2,$3) RETURNING *';
      const hash = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds));
      const result = await conn.query(sql, [u.first_name, u.last_name, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
      throw new Error(`unable to create user ${u.first_name}:${error}`);
    }
  }

  async authenticate(firstName: string, password: string) {
    const conn = await client.connect();
    const sql = 'SELECT password FROM users WHERE first_name=$1 ';
    const result = await conn.query(sql, [firstName]);
    if (result.rows.length) {
      const user = result.rows[0];
      if (bcrypt.compareSync(password + pepper, user.password)) {
        return user;
      }
    }

    return null;
  }

  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release;
      return result.rows;
    } catch (error) {
      throw new Error(`could not retrieve users`);
    }
  }

  async show(id: number): Promise<User> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users WHERE id=$1';
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error('could get that user');
    }
  }
}
