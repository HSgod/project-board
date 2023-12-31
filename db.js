const mongoose = require('mongoose');

const connectToDB = () => {
    const NODE_ENV = process.env.NODE_ENV;
    let dbUri = '';
  
    if(NODE_ENV === 'production') dbUri = process.env.DB_URL;
    else dbUri = 'mongodb://localhost:27017/adsDB';
  
    mongoose.connect(dbUri);
    const db = mongoose.connection;
  
    db.once('open', () => {
      console.log('Connected to the database');
    });
    db.on('error', (err) => console.log('Error ' + err));
  };
  
module.exports = connectToDB;