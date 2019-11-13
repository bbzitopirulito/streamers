const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.store);
routes.get('/user', UserController.getUser);
routes.put('/updateuser',upload.single('profilepic'), UserController.update);
routes.get('/userbyid', UserController.showById); 
routes.delete('/deleteuser', UserController.delete);
routes.put('/setpreferences', UserController.setPreferences);

module.exports = routes;