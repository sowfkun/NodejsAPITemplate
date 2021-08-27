import mongoose from 'mongoose';

const ConnectDatabase = () => {
  const mongoUrl = process.env.MONGO_URL;
  mongoose.Promise = global.Promise;
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch(() => {
      console.log('Could not connect to database');
      process.exit();
    });
};

export default ConnectDatabase;
