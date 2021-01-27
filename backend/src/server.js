// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const http = require('http');

// const routes = require('./routes');

// const app = express();
// const server = http.Server(app);

// mongoose.connect('mongodb+srv://bernardo:bernardo@streamers-lvdgd.gcp.mongodb.net/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connectedUsers = {};

// app.use((req, res, next) => {
//     req.connectedUsers = connectedUsers;

//     return next();
// })

// app.use(cors());
// app.use(express.json());
// app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
// app.use(routes);

// server.listen(3333);

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });