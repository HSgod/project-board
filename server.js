const express = require('express');
const cors = require('cors');
const path = require('path');
const connectToDB = require('./db');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');

// start express server
const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to DB
connectToDB();

// add middleware
if(process.env.NODE_ENV !== 'production') {
    app.use(
      cors({
        origin: ['http://localhost:3000'],
        credentials: true,
      })
    );
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
    secret: 'xyz567', 
    store: MongoStore.create(mongoose.connection), 
    resave: false, 
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV == 'production',
    },
}));

// serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));

// add routes
app.use('/api', require('./routes/ads.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

// at any other Link , just serve react app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res ) => {
  res.status(404).send({ message: 'Not found...' });
});