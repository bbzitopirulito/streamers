const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

const routes = express.Router();
const upload = multer(uploadConfig);

//user
routes.get('/user', UserController.getUser);
routes.get('/userbyid', UserController.showById); 
routes.get('/friends', UserController.getFriends);
routes.delete('/deleteuser', UserController.delete);
routes.get('/username', UserController.getUsername);
routes.put('/updatefriends', UserController.updateFriends);
routes.put('/setpreferences', UserController.setPreferences);
routes.post('/users', upload.single('profilepic'), UserController.store);
routes.put('/updateuser', upload.single('profilepic'), UserController.update);

//post
routes.post('/posts', PostController.store)

module.exports = routes;