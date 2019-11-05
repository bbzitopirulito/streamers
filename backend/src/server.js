const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://bernardo:bernardo@streamers-lvdgd.gcp.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});