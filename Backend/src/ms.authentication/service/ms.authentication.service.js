import { createHash, generateToken, isValidPassword } from '../../utils/utils.js';
import { InvalidCredentials, UserAlreadyExists } from '../../utils/custom.exceptions.js';
import * as usersService from '../../ms.users/service/ms.users.service.js';

const register = async (user) => {
  const userByEmail = await usersService.getByEmail(user.email);

  if (userByEmail) {
    throw new UserAlreadyExists('Un usuario con el email ingreasdo ya ha sido registrado');
  }

  const hashedPassword = createHash(user.password);

  const newUser = {
    ...user,
  };

  newUser.password = hashedPassword;

  const result = await usersService.save(newUser);

  return { status: 'success', data: result };
};

const login = async (email, password) => {
  const user = await usersService.getByEmail(email);
  if (!user) {
    throw new InvalidCredentials('Email o contraseña incorrectos, por favor intente nuevamente')
  };

  const comparePassword = isValidPassword(password, user.password);

  if (!comparePassword) {
    throw new InvalidCredentials('Email o contraseña incorrectos, por favor intente nuevamente')
  };

  const { password: _, ...userResult } = user;
  const accessToken = generateToken(userResult);

  return { status: 'success', message: 'Login Exitoso', access_token: accessToken }

};

export {
  register,
  login,
}