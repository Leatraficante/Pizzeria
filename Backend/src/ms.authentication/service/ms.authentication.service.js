import { createHash, isValidPassword } from '../../utils/utils.js';
import { InvalidCredentials, UserAlreadyExists } from '../../utils/custom.exceptions.js';
import UsersRepository from '../../ms.users/repository/ms.users.repository.js';

const usersRepository = new UsersRepository();

const register = async (user) => {
  const user = await usersRepository.getByEmail(email);

  if (user) {
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
