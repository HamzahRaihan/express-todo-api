const mongoose = require('mongoose');

let isConnected = false;

const connnectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
  }
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: 'todo-db',
    });
    isConnected = true;
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connnectToDB;
