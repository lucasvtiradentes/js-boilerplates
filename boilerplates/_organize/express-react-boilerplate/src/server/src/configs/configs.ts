import { join, basename, dirname } from 'path'
import { existsSync, readFileSync } from "fs";
import APP_CONFIGS from './app-configs.json'

import dotenv from 'dotenv'
dotenv.config()

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development"
const DROPSPY_FOLDER = NODE_ENV === "production" ? join(__dirname, '../..', 'dropspy') : ""

const VERSION = process.env.npm_package_version || "#"
const SERVER_PORT = (process.env.PORT || APP_CONFIGS['server_configs'].default_port)?.toString().trim()

export {
  APP_CONFIGS,
  NODE_ENV,
  DROPSPY_FOLDER,
  VERSION,
  SERVER_PORT,
}
