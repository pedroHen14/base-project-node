const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')
const authConfig = require('../config/auth.json');
const { generateToken } = require('../utils');

module.exports = {

  async register(req, res) {
    const {email} = req.body;

    try {
      if(await User.findOne({email}))
        return res.status(400).send({error: 'User already exists'});

      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({
        user,
        token: generateToken({id: user.id})
      })
    } catch (error) {
      return res.status(400).send({error: 'Registration failed'});
    }
  },

  async authenticate(req, res) {
    const {email, password} = req.body;
  
    const user = await User.findOne({ email });
  
    if(!user)
      return res.status(400).send({error: 'User not found'});
  
    if(!await bcrypt.compare(password, user.password))
      return res.status(400).send({error: 'Invalid password'});
  
    user.password = undefined;
  
    res.send({
      user,
      token: generateToken({id: user.id}),
    });
  }
}
