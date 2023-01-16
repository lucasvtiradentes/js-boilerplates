import { NextFunction, Request, Response } from 'express';
import { logger } from '../../utils/logger';

export function accessLogerMiddleware(req: Request, res: Response, next: NextFunction) {
  logger(`a user just access the route [${req.originalUrl}] | ${process.pid}`);
  next();
}
