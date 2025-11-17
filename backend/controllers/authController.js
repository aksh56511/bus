const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }
    // Check if user exists
    const existing = User.getAllUsers().find(u => u.username === username);
    if (existing) {
      return res.status(409).json({ error: 'User already exists' });
    }
    // Hash password
    const hashed = bcrypt.hashSync(password, 10);
    const user = User.addUser({ username, password: hashed });
    res.status(201).json({ user: { id: user.id, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

exports.login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }
    const user = User.getAllUsers().find(u => u.username === username);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Generate JWT
    const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to login' });
  }
};