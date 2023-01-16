import { logger } from './logger';

/* ========================================================================== */

function setupGracefulShutdown(proc: NodeJS.Process, gracefulShutdownCbFn: (sig: string) => any) {
  const exitSignals: NodeJS.Signals[] = ['SIGILL', 'SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGABRT', 'SIGBREAK'];
  exitSignals.map((signal) => proc.on(signal, gracefulShutdownCbFn));
}

function handleErrorEvents(proc: NodeJS.Process, handleErrorFn: (error: string, origin: any) => any) {
  const errorEvents = ['uncaughtException', 'unhandledRejection', 'error'];
  errorEvents.map((signal) => proc.on(signal, handleErrorFn));
}

function handleExitEvent(proc: NodeJS.Process, handleExitFn: (exitCode: number) => any) {
  proc.on('exit', handleExitFn);
}

/* ========================================================================== */

function setupProcessEvents(process: NodeJS.Process) {
  handleErrorEvents(process, (error, origin) => {
    logger(`unhandle error detected: ${error} | ${origin}`);
  });

  handleExitEvent(process, (exitCode: number) => {
    logger(`exiting nodejs process with status: [${exitCode}]`);
  });
}

/* ========================================================================== */

export { handleErrorEvents, handleExitEvent, setupProcessEvents, setupGracefulShutdown };
