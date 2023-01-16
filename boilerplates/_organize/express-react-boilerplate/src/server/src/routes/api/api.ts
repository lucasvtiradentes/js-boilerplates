import { Request, Response, Router } from 'express'

export default function getApiServer(): Router{

  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.send("API");
  });

  return router

}
