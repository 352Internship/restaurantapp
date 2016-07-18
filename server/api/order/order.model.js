'use strict';

import mongoose, {Schema} from 'mongoose';

var OrderSchema = new mongoose.Schema({
  items: [{
    menuItem: Schema.Types.ObjectId,
    quantity: Number,
    price: Number,
    discount: Number
  }],
  totalPrice: Number,
  specialInstructions: String,
  customer: Schema.Types.ObjectId,
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Order', OrderSchema);
