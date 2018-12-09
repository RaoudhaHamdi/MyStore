const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true, index: true },
  password: String,
}, { timestamps: true });

userSchema.toJSON = function user() {
  return {
    id: this._id,
    username: this.username,
    email: this.email,
    createdAt: this.createdAt,
  };
};

export default mongoose.model('User', userSchema);
