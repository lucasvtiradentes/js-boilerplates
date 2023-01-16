import { NODE_ENV, SERVER_PORT, SERVER_URL } from './configs/configs';
import { createServer } from './server/server';
import { setupGracefulShutdown, setupProcessEvents } from './utils/handle-events';
import { logger } from './utils/logger';

logger(`application started in [${NODE_ENV}] mode`);

const server = createServer().listen(SERVER_PORT, async () => {
  logger(`server [${SERVER_URL}] was started at port [${SERVER_PORT}] and pid [${process.pid}]`);
});

setupProcessEvents(process);

setupGracefulShutdown(process, (signal: string) => {
  logger(`\n[${signal}] signal was recieved`);
  logger(`graceful shutdown initiated`);

  server.close(() => {
    logger('server was closed');
    process.exit(0);
  });
});
