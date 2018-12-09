
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
export default async function dbConnect() {
  mongoose.connection
    .on('error', () => { })
    .on('close', () => { })
    .once('open', () => { });

  await mongoose.connect('mongodb://localhost/hackthon', { useNewUrlParser: true });
}
