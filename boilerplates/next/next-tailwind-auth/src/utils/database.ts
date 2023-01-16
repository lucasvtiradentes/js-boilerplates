import mongoose from 'mongoose';
import { MONGO_URL } from '../configs/configs';

const connectMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    const { connection } = await mongoose.connect(MONGO_URL);

    if (connection.readyState == 1) {
      console.log('DATABASE CONNECTED');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.log('DATABASE FAILED TO CONNECT!');
    return Promise.reject(error);
  }
};

export default connectMongo;
