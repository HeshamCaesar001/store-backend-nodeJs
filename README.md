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

#### Notes
- when building db in postgres server build another one for test
- this project uses two kind of db one for development and one for testing with jasmine 