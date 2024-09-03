# Store Backend Project

This is a backend API for a simple e-commerce system 🛒

## TO Setup and Start Project 🚀

- First, to install all packages, run `npm install` 📦
- There is a `database.json` file; feel free to insert your DB name, user, and password to connect the app with this DB 🔑
- Run `db-migrate up` to migrate all tables into your DB 🗄️
- Server runs on localhost port 3000 and DB put your desired port (Postgres default) 🌐
- All needed endpoints/routes can be found in the `REQUIREMENTS.md` file 📄

### Needed Scripts 🛠️

- `npm run build` to build the project 🔨
- `npm run test` to test the project with Jasmine 🧪
- `b-migrate up` to migrate all tables to the database 🔼
- `db-migrate down` to drop tables from the database 🔽

#### Needed Environment Variables 🌍

- POSTGRES_HOST: You may use your local host 🏠
- POSTGRES_DB: Database name 🗃️
- POSTGRES_TEST_DB: Test database name 🧪
- POSTGRES_USER: Database server user name 👤
- POSTGRES_PASSWORD: Database server user's password 🔐
- ENV: `dev` for development and `test` for testing 🛠️
- BCRYPT_PASSWORD: Choose your desired password for encryption 🔒
- SALT_ROUNDS: Number of rounds to add salts for user password hashing 🧂
- TOKEN_SECRET: Your secret token for logged users 🔑

# Notes 📝

- When building the DB in the Postgres server, build another one for testing 🧪
- This project uses two kinds of DB: one for development and one for testing with Jasmine 🏗️

