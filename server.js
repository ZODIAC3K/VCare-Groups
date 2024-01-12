const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
const url = 'mongodb+srv://zodiac3k:Rockon-30@cluster0.v3cd9pm.mongodb.net/?retryWrites=true&w=majority';  // This is my testing mongodb URI change it to yours
const dbName = 'testing';

// Salt rounds for bcrypt
const saltRounds = 10;

let db; // Variable to store the MongoDB client

// Connect to MongoDB
MongoClient.connect(url)
  .then(client => {
    console.log('Connected to the database');
    db = client.db(dbName);
  })
  .catch(err => console.error('Error connecting to the database', err));

app.post('/login', async (req, res) => {
  // Check if the database is connected
  if (!db) {
    res.status(500).json({ success: false, message: 'Database not connected.' });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;

  try {
    const users = db.collection('users');
    const user = await users.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});

app.post('/register', async (req, res) => {
  // Check if the database is connected
  if (!db) {
    res.status(500).json({ success: false, message: 'Database not connected.' });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const users = db.collection('users');
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      res.json({ success: false, message: 'Email is already registered.' });
    } else {
      const newUser = {
        email,
        password: hashedPassword,
      };

      await users.insertOne(newUser);

      res.json({ success: true, message: 'User registered successfully.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'An error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
