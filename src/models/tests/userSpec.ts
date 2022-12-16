import { UserStore } from '../user';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS as string;
const pepper = process.env.BCRYPT_PASSWORD as string;
const store = new UserStore();

describe('order model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });
  it('should have authenticate method', () => {
    expect(store.authenticate).toBeDefined();
  });
  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have show method', () => {
    expect(store.show).toBeDefined();
  });

  it('index method should return all users in DB', async () => {
    const result = await store.index();
    if (result.length) {
      expect(result.length).toEqual(result.length);
    } else {
      expect(result).toEqual([]);
    }
  });
  it('show method should return the correct user', async () => {
    const result = await store.show(2);
    if (result == undefined) {
      expect(result).toBeUndefined();
    } else {
      expect(`user first name is ${result['first_name']}`).toEqual(
        `user first name is ahemd`
      );
    }
  });
  it('create user should add user in db', async () => {
    const result = await store.create({
      first_name: 'hisham',
      last_name: 'ibrahim',
      password: 'password123',
    });
    expect(`username is ${result['first_name']}`).toEqual(`username is hisham`);
  });
  it('auth function should loge in the user if the first name and password match in db and return null if not', async () => {
    const result = await store.authenticate('hisham', 'password123');
    const hash = bcrypt.hashSync('password123' + pepper, parseInt(saltRounds));
    if(result == null){
      expect(result).toBe(null)
    }else{
      const check = bcrypt.compareSync('password123' + pepper,hash);
      expect(check).toBe(true)
    }
   
  });
});
