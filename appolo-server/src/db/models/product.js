const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  designation: String,
  price: String,
  category: String,
  image: String,
  rate: Number,
  description: String,

}, { timestamps: true });

productSchema.toJSON = function product() {
  return {
    id: this._id,
    designation: this.designation,
    price: this.price,
    category: this.category,
    image: this.image,
    rate: this.rate,
    description: this.description,

  };
};

export default mongoose.model('Product', productSchema);
