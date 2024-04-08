import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import AuthRouter from './src/ms.authentication/routes/auth.router.js';
import configs from './src/configs/configs.js';
import { addLogger } from './loggers.js';

const app = express();

const authRouter = new AuthRouter();

app.use((req, res, next) => {
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(addLogger);

app.use('/pizzeria/auth', authRouter.getRouter());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo falló!');
});

try {
  await mongoose.connect(configs.mongoUrl);
  console.log('La BD esta conectada');
} catch (error) {
  console.error(error.message);
}

const server = app.listen(configs.port, () => {
  console.log(`Conectado en puerto: ${configs.port}`);
});
