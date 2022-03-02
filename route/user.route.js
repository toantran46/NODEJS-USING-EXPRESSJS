const express = require('express');
var controller = require('../controller/user.controller');

var route = express.Router();

route.get('/',controller.index);

route.post('/create',controller.create );

route.get('/create',controller.renderCreate);

route.get('/search',controller.search);

route.get('/:id',controller.id);


module.exports = route;


