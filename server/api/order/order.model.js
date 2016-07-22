'use strict';

import mongoose, {Schema} from 'mongoose';

var OrderSchema = new mongoose.Schema({
  items: [{
    menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: Number,
    price: Number,
    discount: Number
  }],
  totalPrice: Number,
  specialInstructions: String,
  customer: { type: Schema.Types.ObjectId, ref: 'User' },
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Order', OrderSchema);
