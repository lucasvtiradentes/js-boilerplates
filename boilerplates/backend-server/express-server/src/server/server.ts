import cors from 'cors';
import express, { Express } from 'express';
import { NODE_ENV, SERVER_PORT, SERVER_URL } from '../configs/configs';
import { apiRoutes } from './routes/api-routes';
import { routes } from './routes/routes';
import { accessLogerMiddleware } from './utils/access-middleware';
import { pageNotFound } from './utils/page-not-found';
import { getAllRoutesByCategory, parseRoutesToHtmlFormat } from './utils/show-all-server-endpoints';

function createServer(): Express {
  const app = express();
  app.use(express.json({ limit: '25mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: [`http://localhost:${SERVER_PORT}`, SERVER_URL]
    })
  );

  if (NODE_ENV !== 'test') {
    app.use(accessLogerMiddleware);
  }

  app.get('/api', function apiPage(req, res) {
    res.write(parseRoutesToHtmlFormat(getAllRoutesByCategory(app, SERVER_URL)));
    res.end();
  });

  app.use('/', routes);
  app.use('/api-v1', apiRoutes);

  app.get('*', pageNotFound);

  return app;
}

export { createServer };
