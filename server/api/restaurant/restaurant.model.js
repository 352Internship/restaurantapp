'use strict';

import mongoose, {Schema} from 'mongoose';

var RestaurantSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  name: String,
  description: String,
  hours: String,
  phone: String,
  email: String,
  owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Restaurant', RestaurantSchema);
