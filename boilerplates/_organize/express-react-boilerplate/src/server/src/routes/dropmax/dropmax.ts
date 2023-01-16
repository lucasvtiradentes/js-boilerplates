import { Request, Response, Router } from 'express'

export default function getDropmaxServer(): Router{

  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.send("DROPMAX");
  });

  return router

}
