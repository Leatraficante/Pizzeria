import dotenv from 'dotenv';

dotenv.config();

const configs = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  userTestEmail: process.env.USER_TEST_EMAIL,
  userTestPassword: process.env.USER_TEST_PASSWORD,
  privateKeyJWT: process.env.PRIVATE_KEY_JWT,
};

export default configs;
