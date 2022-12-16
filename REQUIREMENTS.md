# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index ['/products'] (GET)
- Show ['/product/:id'] (GET)
- Create [token required] ['/products'] (POST)


#### Users
- Index [token required] ['/users'] (GET)
- Show [token required]  ['/user/:id'] (GET)
- Create [token required] ['/users'] (POST)

#### Orders
- Current Order by user (args: user id)[token required]  ['/user/:id/orders'] (GET)
-add product to order ['/orders/:id/products'] (POST)
## Data Shapes
#### Product
-  id ---> serial primary key
- name ---> VARCHAR(64)
- price---> integer

#### User
- id ----> serial primary key
- firstName----> varchar(64)
- lastName-----> varchar(64)
- password----->varchar

#### Orders
- id------>serial primary key
- user_id ----> bigint references users(id)
- status of order ----> varchar

#### Order_products
- id ------> serial primary key
- quantity ------> integer
- product_id ----> bigint reference product(id)
- order_id-------> bigint reference product(id)

