const express = require('express');
const db = require('./database');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./model');
const { MONGO_SVC_PORT_27017_TCP_ADDR, MONGO_SVC_PORT_27017_TCP_PORT } =
  process.env;

// const mongoUri = `mongodb://root:root@${MONGO_SVC_PORT_27017_TCP_ADDR}:${MONGO_SVC_PORT_27017_TCP_PORT}/mydb`;
const mongoUri =
  'mongodb://mongo-0.mongo,mongo-1.mongo,mongo-2.mongo:27017/mydb';
db.connection(mongoUri).then(console.log);

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log(process.env);
app.get('/', (req, res) => {
  res.send(`Hello from Vu!`);
});

app.post('/user', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    const saved = await user.save();
    res.json({ user: saved });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

app.get('/user', async (req, res) => {
  try {
    const user = await User.find({});
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) res.json({ error: 'bad request' });
  res.json({ message: "You're login" });
});

app.listen(3000, (err) => {
  console.log('Project listen on port ', 3000);
});
