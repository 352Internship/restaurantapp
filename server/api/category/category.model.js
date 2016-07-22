'use strict';

import mongoose from 'mongoose';

var CategorySchema = new mongoose.Schema({
  title: String,
  description: String,
  imageURL: String,
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Category', CategorySchema);
