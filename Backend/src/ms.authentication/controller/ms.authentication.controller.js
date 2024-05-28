import { InvalidCredentials, UserAlreadyExists } from '../../utils/custom.exceptions.js';
import authLogger from '../logger.js';
import * as authService from '../service/ms.authentication.service.js';

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

    const user = await authService.login({ ...req.body });
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
    res.clearCookie('pizzeriaCookieToken');
    res.redirect('/login');
  } catch (error) {
    authLogger.error('Error en el logout de usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

export { register, login, logout };
