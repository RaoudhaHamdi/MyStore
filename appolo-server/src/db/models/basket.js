const mongoose = require('mongoose');

const basketSchema = new mongoose.Schema({
  // url: String,
  // title: String,
}, { timestamps: true });

basketSchema.toJSON = function photo() {
  return {
    // id: this._id,
    // url: this.url,
    // title: this.title,
    createdAt: this.createdAt,
  };
};

export default mongoose.model('Basket', basketSchema);
