import Router from '../../router/router.js'
import { accessRolesEnum, passportStrategiesEnum } from '../../configs/enums.js';
import { register, login, logout } from '../controller/ms.authentication.controller.js';

export default class AuthRouter extends Router {
  constructor() {
    super();
  }

  init() {
    this.post('/login', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, login);
    this.post('/register', [accessRolesEnum.PUBLIC], passportStrategiesEnum.NOTHING, register);
    this.post('/logout', [accessRolesEnum.USER, accessRolesEnum.ADMIN], passportStrategiesEnum.JWT, logout);
  }
}
