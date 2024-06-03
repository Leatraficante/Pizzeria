import UsersRepository from '../../ms.users/repository/ms.users.repository.js';
import { InvalidCredentials, UserAlreadyExists } from '../../utils/custom.exceptions.js';
import authLogger from '../logger.js';
import * as authService from '../service/ms.authentication.service.js';

const usersRepository = new UsersRepository();

const register = async (req, res) => {
  try {
    const { nombre, apellido, email, fechaNacimiento, password } = req.body;

    if (!nombre || !apellido || !email || !fechaNacimiento || !password) {
      return res.sendClientError('Valores incompletos');
    }

    const newUser = await authService.register({ ...req.body });

    res.sendSuccessNewResults(newUser);
  } catch (error) {
    authLogger.error('Error en el registro de usuario:', error);
    if (error instanceof UserAlreadyExists) {
      return res.sendClientError(error.message);
    }
    res.sendServerError(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendClientError('Valores incompletos');
    }

    const result = await authService.login(email, password);

    res.cookie('pizzeriaCookieToken', result.access_token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
      .send({ status: 'success', message: 'Login realizdo con éxito' });

    console.log(result)

  } catch (error) {
    authLogger.error('Error en el login de usuario:', error);
    if (error instanceof InvalidCredentials) {
      return res.sendClientError(error.message);
    }
    res.sendServerError(error.message);
  }
};

const logout = async (req, res) => {
  try {
      await authService.logout();
      res.clearCookie('pizzeriaCookieToken');
      res.redirect("/login");
  } catch (error) {
      req.logger.error(error.message);
      res.sendClientError({ status: 'error', message: error.message })
  }
};

const home = async (req, res) => {
  console.log('Hola desde la homepage')
}


export { register, login, logout, home };
