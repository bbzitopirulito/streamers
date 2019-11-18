const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/user', UserController.getUser);
routes.get('/userbyid', UserController.showById); 
routes.delete('/deleteuser', UserController.delete);
routes.get('/username', UserController.getUsername);
routes.put('/setpreferences', UserController.setPreferences);
routes.post('/users', upload.single('profilepic'), UserController.store);
routes.put('/updateuser', upload.single('profilepic'), UserController.update);

module.exports = routes;