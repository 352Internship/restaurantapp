'use strict';

import mongoose, {Schema} from 'mongoose';

var OrderSchema = new mongoose.Schema({
  items: [{
    menuItem: Schema.Types.ObjectId,
    quantity: Number,
    price: Number,
    discout: Number
  }],
  totalPrice: Number,
  specialInstructions: String,
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Order', OrderSchema);
