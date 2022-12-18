# Store Backend Project

## TO Setup and start Project 
- first to install all packages run npm install 
- there is database.json file feel free to insert your DB name ,user and password to connect the app with this db
- run db-migrate up to migrate all table into your DB
- server run on local host port 3000 and db put your desired port (postgres default) 
- all needed endPoints routes found in REQUIREMENTS.md file

### Needed Scripts
- npm run build  to build the project
- npm run test to test the project with jasmine
- db-migrate up to migrate all tables to database
- db-migrate down to drop table from database

#### Needed Environment Variables
POSTGRES_HOST ----> you may use your local host 
POSTGRES_DB -----> database name
POSTGRES_TEST_DB -----> test database name
POSTGRES_USER ----> database server user name
POSTGRES_PASSWORD ----> database server user's password
ENV ------> dev for development and test for testing 
BCRYPT_PASSWORD-----> choose your desired password for encryption
SALT_ROUNDS------> number of rounds to add salts for user password hashing
TOKEN_SECRET -----> your secret token for logged user
##### Notes
- when building db in postgres server build another one for test
- this project uses two kind of db one for development and one for testing with jasmine 