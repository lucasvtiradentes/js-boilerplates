export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV_VARIABLE1: string;
      ENV_VARIABLE2: string;
    }
  }
}
