# estore

1.  Install yeoman generator (npm install -g yo).  Once you have yeoman, install express generator with es6 (npm install -g express-es6).  Generate an express boilerplate (yo express-es6).

2. Install express-handlebars (npm install express-handlebars) and import into app.js file.  Change "view engine" setting in app.js to use new package.

3. Create partials folder in views folder.  In partial folder, create header.hbs file and make a header.  Import the header into layout.hbs with {{>header}} above {{body}}

4. Import and initialize mongoose.  Set mongoose to listen to a port and set a database folder.   If none exists, it will make one for you.  

5. Create a models folder to store your mongoose models.  In models folder, create a product model file (schema).

6.  We need to seed "products" into our database if we don't have real products.  We can use faker.js or some other seeding package, or we can create our own product seeder.  We will make a product seeder.  Create a folder called seed and a file in that folder called product-seeder.js or whatever you want.
    Note: also install bluebird for promises and change mongoose's promise module (mongoose.Promise = require('bluebird))

7. Once seeded, access product info by using the find() method.  The database will be accessed anytime the main page is loaded and so the find() method should be placed in the root route.  (index.js in routes folder).

8. Iterate through the products in the html by using handlebar's ability to iterate through a list with {{#each}} (make sure to pass the list in the root route)

