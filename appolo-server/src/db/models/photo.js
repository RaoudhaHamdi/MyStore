const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  url: String,
  title: String,
}, { timestamps: true });

photoSchema.toJSON = function photo() {
  return {
    id: this._id,
    url: this.url,
    title: this.title,
    createdAt: this.createdAt,
  };
};

export default mongoose.model('Photo', photoSchema);
