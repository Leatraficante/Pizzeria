import { createHash, generateToken, isValidPassword } from '../../utils/utils.js';
import { InvalidCredentials, UserAlreadyExists } from '../../utils/custom.exceptions.js';
import UsersRepository from '../../ms.users/repository/ms.users.repository.js';

const usersRepository = new UsersRepository();

const register = async (user) => {
  const userByEmail = await usersRepository.getByEmail(user.email);

  if (userByEmail) {
    throw new UserAlreadyExists('Un usuario con el email ingreasdo ya ha sido registrado');
  }

  const hashedPassword = createHash(user.password);

  const newUser = {
    ...user,
  };

  newUser.password = hashedPassword;

  const result = await usersRepository.save(newUser);

  return result;
};

const login = async (email, password) => {
  const user = await usersRepository.getByEmail(email);
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