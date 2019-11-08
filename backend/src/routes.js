const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.put('/updateuser', UserController.update);
routes.get('/userbyid', UserController.showById); 
routes.get('/user', UserController.getUser);

module.exports = routes;