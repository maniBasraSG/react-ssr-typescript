import * as dotenv from 'dotenv';
const envVariables = dotenv.config({ path: __dirname + '/../.env' })?.parsed;

const config = {
  API_URL: envVariables.BASE_API,
  PORT: envVariables.PORT,
  SENTRY_URL: envVariables.SENTRY,
  MODE: envVariables.MODE,
};

export default config;
