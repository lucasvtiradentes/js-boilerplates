import { Request, Response, Router } from 'express';

const apiRoutes: any = Router();

apiRoutes.get('/', function homePage(req: Request, res: Response) {
  res.status(200).send(`home ${process.pid}`);
});

apiRoutes.post('/create', function homePage(req: Request, res: Response) {
  res.status(200).send(`home ${process.pid}`);
});

apiRoutes.get('/list', function homePage(req: Request, res: Response) {
  res.status(200).send(`home ${process.pid}`);
});

apiRoutes.delete('/delete', function homePage(req: Request, res: Response) {
  res.status(200).send(`home ${process.pid}`);
});

export { apiRoutes };
