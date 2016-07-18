'use strict';

import mongoose, {Schema}  from 'mongoose';

var MenuItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  options: [String],
  featured: Boolean,
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  discountAmount: {
    type: Number,
    default: 0.00
  },
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('MenuItem', MenuItemSchema);
