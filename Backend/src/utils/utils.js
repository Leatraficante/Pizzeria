import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import configs from '../configs/configs.js';

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (plainPassword, hashedPassword) =>
  bcrypt.compareSync(plainPassword, hashedPassword);

const generateToken = (user) => {
  const token = jwt.sign({ user }, configs.privateKeyJWT, { expiresIn: '24h' });
  return token;
};

const authorization = (role) => {
  return async (req, res, next) => {
    if (req.user.role !== role) return res.sendForbidden('No tienes permisos');
    next();
  };
};

export { createHash, isValidPassword, generateToken, authorization };
