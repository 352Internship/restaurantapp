/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Category from '../api/category/category.model'
import MenuItem from '../api/menuItem/menuItem.model'
import Order from '../api/order/order.model'

Thing.find({}).remove()
.then(() => {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
    'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
    'Stylus, Sass, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
    'AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep ' +
    'tests alongside code. Automatic injection of scripts and ' +
    'styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more ' +
    'code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript ' +
    'payload, minifies your scripts/css/images, and rewrites asset ' +
    'names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
    'and openshift subgenerators'
  });
});

Category.find({}).remove()
.then(() => {
  Category.create({
    title: 'Appetizers',
    description: "You eat these when you are really hungry want food while you wait."
  }, {
    title: 'Lunch',
    description: 'This is that meal that comes between breakfast and dinner.'
  }, {
    title: 'Breakfast',
    description: 'The first thing you do when you get up.'
  });
});

MenuItem.find({}).remove()
.then(() => {
  MenuItem.create({
    title: 'Cheese Burger',
    description: 'A yummy beef patty, lettuce, cheese, pickles, and onions',
    price: 9.99,
    featured: false
  }, {
    title: 'Pizza',
    description: 'A 12" pizza, choose up to 3 toppings',
    price: 12.99,
    options: [
      'Pepperoni',
      'Ham',
      'Pinapple',
      'Sausage',
      'Extra Cheese'],
    featured: true
  });
});

Order.find({}).remove()
.then(() => {
  Order.create({
    items: [{
      quantity: 1,
      price: 9.99,
      discout: 0
    }],
    totalPrice: 9.99,
    specialInstructions: 'No Cheese'
  });
});

User.find({}).remove()
.then(() => {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@example.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@example.com',
    password: 'admin'
  })
  .then(() => {
    console.log('finished populating users');
  });
});
