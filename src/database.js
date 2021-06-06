const Mongoose = require('mongoose');

module.exports.connection = (mongoUri) =>
  new Promise((res, rej) => {
    Mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    //   .then((b) => console.log(b))
      .catch((err) => console.log(err.message));
    Mongoose.connection.on('connected', () => {
      res('Mongo Database connected');
    });
    require('./model');
  });
