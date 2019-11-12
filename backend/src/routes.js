const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/user', UserController.getUser);
routes.put('/updateuser', UserController.update);
routes.get('/userbyid', UserController.showById); 
routes.delete('/deleteuser', UserController.delete);
routes.put('/setpreferences', UserController.setPreferences);

module.exports = routes;