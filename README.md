## Unit Assignment: Student Store

Submitted by: **Ahmed Hamouda**

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES


- [X] **Database Creation**: Set up a Postgres database to store information about products and orders.
  - [X] Use the provided schema to create tables for `products`, `orders`, and `order_items`.
- [X] **Products Model**: Develop a model to represent individual items available in the store. 
  - [X] This model should include attributes such as `id`, `name`, `description`, `price`, `image_url`, and `category`.
  - [X] Implement methods for CRUD operations on products.
  - [X] Ensure transaction handling for the deletion of products to also delete related `order_items`
- [X]**Orders Model**: Develop a model to manage orders. 
  - [X] This model should include attributes such as `order_id`, `customer_id`, `total_price`, `status`, and `created_at`.
  - [X] Implement methods for creating, fetching, updating, and deleting orders.
  - [X] Ensure transaction handling for the deletion of orders to also delete related `order_items`
- [X] **Order Items Model**: Develop a model to represent the items within an order. 
  - [X] This model should include attributes such as `order_item_id`, `order_id`, `product_id`, `quantity`, and `price`.
  - [X] Implement methods for fetching and creating order items.
- [X] **API Endpoints**
  - [X] **Product Endpoints**:
    - [X] `GET /products`: Fetch a list of all products.
    - [X] `GET /products/:id`: Fetch details of a specific product by its ID.
    - [X] `POST /products`: Add a new product to the database.
    - [X] `PUT /products/:id`: Update the details of an existing product.
    - [X] `DELETE /products/:id`: Remove a product from the database.
  - [X] **Order Endpoints**:
    - [X] `GET /orders`: Fetch a list of all orders.
    - [X] `GET /orders/:order_id`: Fetch details of a specific order by its ID, including the order items.
    - [X] `POST /orders`: Create a new order with order items.
    - [X] `PUT /orders/:order_id`: Update the details of an existing order (e.g., change status).
    - [X] `DELETE /orders/:order_id`: Remove an order from the database.
- [X] **Frontend Integration**
  - [X] Connect the backend API to the provided frontend interface, ensuring dynamic interaction for product browsing, cart management, and order placement. Adjust the frontend as necessary to work with your API.


#### STRETCH FEATURES

- [X] **Added Endpoints**
  - [X] Create an endpoint for fetching all orders in the database.
  - [X] Create an endpoint for serving an individual order based on its ID.
- [ ] **Filter Orders**
  - [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] **Implement Your Own Frontend**
  - [ ] Build your own user interface for browsing products, managing the shopping cart, and placing orders. This will involve integrating the frontend you create with the backend API you developed during the project.
- [ ] **Past Orders Page**
  - [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.


### Walkthrough Video
`<div>
    <a href="https://www.loom.com/share/368cb10de1e04c99a088346238d568cc">
      <p>Student Store Project - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/368cb10de1e04c99a088346238d568cc">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/368cb10de1e04c99a088346238d568cc-with-play.gif">
    </a>
  </div>`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The lab sessions were very helpful, especially for understanding the basic backend structure and the intricacies of CRUD operations. These foundational skills were directly applicable to the assignments. However, I found implementing my frontend with my backend more challenging. Although these topics were initially difficult, I enjoyed the process of troubleshooting and learning through these challenges. The satisfaction of successfully integrating the frontend with the backend was particularly rewarding. I encountered issues with routing and one-to-many relationships, which required me to reroute paths and adjust some logical functions in my controllers to implement more features. This primarily occurred from milestone 4 to milestone 5.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

If I had more time, I would have created my own frontend and spent more time developing the server-side aspect of the project. I would also have implemented additional backend features, such as calculating taxes based on location.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

During the demo, I was able to demonstrate a strong overall understanding of my project and present it with energy, maintaining audience engagement. Next time, I would like to implement more stretch features to showcase, or perhaps incorporate a joke to lighten the presentation. Additionally, I would like to try implementing the function structures used by one of my peers.



### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

SHOUT OUT TO DEVARSH, KEITH, ERICA, ALEX!!!!!!!!