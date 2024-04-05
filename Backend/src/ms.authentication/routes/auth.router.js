import { accessRolesEnum } from '../../configs/enums.js';
import Router from '../../router/router.js';
import { register, login, logout } from '../controller/ms.authentication.controller.js';

export default class authRouter extends Router {
  constructor() {
    super();
  }

  init() {
    this.post('/login', accessRolesEnum.PUBLIC, login);
    this.post('/register', accessRolesEnum.PUBLIC, register);
    this.post('/logout', accessRolesEnum.USER, logout);
  }
}
