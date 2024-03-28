import express from 'express';
import { __dirname } from '../src/utils.js'
import { __mainDirname } from '../src/utils.js'

import { initPassport } from './config/passport.config.js';
import passport from 'passport';
import mongoose from 'mongoose';

import UsersRouter from '../src/routes/users.router.js';

import configs from './config/configs.js'

const app = express();

const usersRouter = new UsersRouter();

initPassport();
app.use(passport.initialize());

app.use((req, res, next) => {
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));


app.use('/', viewsRouter.getRouter());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo falló!');
});

try {
    await mongoose.connect(configs.mongoUrl);
    console.log('La BD esta conectada')
} catch (error) {
    console.error(error.message);
};


const server = app.listen(configs.port, () => {
    console.log(`Conectado en puerto: ${configs.port}`);
});