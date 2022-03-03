const express = require("express");
const authController = require('./controllers/authController.js')

const routes = express.Router();

routes.get('/register', authController.register);
routes.get('/authenticate', authController.authenticate);

module.exports = routes;