import { expect } from 'chai';
import { register, login, logout } from '../../controllers/auth.controller.js';
import * as authService from '../../services/ms.authentication.service.js'; 
import { UserAlreadyExists, InvalidCredentials } from '../../utils/custom.exceptions.js';

