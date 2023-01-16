import cors from 'cors'
import express, { Request, Response } from 'express'
import { join } from 'path'
import { existsSync } from 'fs'

import {
  SERVER_PORT,
  NODE_ENV,
  DROPSPY_FOLDER
} from './configs/configs'

import getDropmaxServer from "./routes/dropmax/dropmax"
import getApiServer from "./routes/api/api"

import homePageController from './pages/homepage/home-page-controller'

let server = express()

server.use(express.json({ limit: '25mb' }));
server.use(express.urlencoded({ extended: true }));

server.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:4000'
  ]
}));

server.use('/pages', express.static(join(__dirname, '/pages/')))

server.get("/", homePageController);
server.use('/dropmax', getDropmaxServer())
server.use('/api', getApiServer())

if (NODE_ENV === "production") {

  if (existsSync(DROPSPY_FOLDER)){
    server.use(express.static(DROPSPY_FOLDER))

    server.get('/*', (req: Request, res: Response) => {
      res.sendFile(join(DROPSPY_FOLDER, 'index.html'))
    })
  }

}

server.get("*", (req, res) => {
  res.send("Error 404 - Page not found!")
});

server.listen(SERVER_PORT, async () => {
  console.log(`server was initiated at PORT ${SERVER_PORT}`)
}).setTimeout(0)
