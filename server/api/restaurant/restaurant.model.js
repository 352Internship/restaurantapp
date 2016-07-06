'use strict';

import mongoose, {Schema} from 'mongoose';

var RestaurantSchema = new mongoose.Schema({
  name: String,
  description: String,
  hours: String,
  phone: String,
  email: String,
  owner: [Schema.Types.ObjectId],
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Restaurant', RestaurantSchema);
