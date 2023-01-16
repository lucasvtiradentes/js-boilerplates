import { Request, Response } from 'express';

export function pageNotFound(req: Request, res: Response) {
  res.status(404).json({ error: `page [${req.originalUrl}] was not found` });
}
