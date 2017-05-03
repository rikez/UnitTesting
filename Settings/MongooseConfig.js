let mongoose = require('mongoose');

let uri =  `mongodb://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(uri, {
  db: { native_parser: true },
  server: { poolSize: 5 },
})

module.exports = mongoose;