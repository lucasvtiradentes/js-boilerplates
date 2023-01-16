import { Request, Response, Router } from 'express';

const routes: any = Router();

routes.get('/', function homePage(req: Request, res: Response) {
  res.status(200).send(`home ${process.pid}`);
});

routes.get('/error', function errorPage(req: Request, res: Response) {
  res.send('error page');
  setTimeout(() => {
    throw new Error('uncaughtException error test');
  }, 2000);
  Promise.reject('unhandledRejection error test');
});

routes.get('/exit', function exitPage(req: Request, res: Response) {
  res.send('exit page');
  process.exit(1);
});

export { routes };
