import dotenv from 'dotenv';
import APP_CONFIGS from './app-configs.json';
dotenv.config();

const VERSION = process.env.npm_package_version ?? '-';
const NODE_ENV = (process.env.NODE_ENV ?? APP_CONFIGS.project_configs.default_env).trim();
const SERVER_PORT = (process.env.PORT ?? APP_CONFIGS.server_configs.default_port)?.toString().trim();
const SERVER_URL = (process.env.SERVER_URL ?? `http://localhost:${SERVER_PORT}`)?.trim();

export { NODE_ENV, VERSION, SERVER_PORT, SERVER_URL };
