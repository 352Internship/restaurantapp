/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/

'use strict';
import User from '../api/user/user.model';
import Category from '../api/category/category.model'
import MenuItem from '../api/menuItem/menuItem.model'
import Order from '../api/order/order.model'

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
  })
  .then(category => {
    MenuItem.find({}).remove()
    .then(() => {
      MenuItem.create({
        title: 'Cheese Burger',
        description: 'A yummy beef patty, lettuce, cheese, pickles, and onions',
        price: 9.99,
        featured: false,
        imageURL: 'https://lh3.googleusercontent.com/Ele8gtDOd1tlQ4TebRJkf6XgpciDD2e57Jf5E3UwAzvfPs0kLhOXJLewZYsu1CFn9CPly0TLvrZUCqJnXMn0=s400',
        category: [category._id]
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
      }, {
        title: "Sammich",
        description: "A delicious sammich",
        price: 18.99,
        featured: true,
        imageURL: 'http://thesandwichguide.com/wp-content/uploads/sandwich.jpg',
        category: [category._id],
      }, {
          title: 'Chicken Sandwich',
          price: 10.99,
          imageURL: 'http://www.chick-fil-a.com/Media/Img/catalog/Food/XLarge/ChickfilA-Grilled-Chicken-Sandwich.png',
          description: 'A sandwich right from our Uncle Sanders!',
          category: [category._id],
        }
      );
    });
  });
});

Order.find({}).remove()
.then(() => {
  Order.create({
    items: [{
      quantity: 1,
      price: 9.99,
      discount: 0
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
