export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      pkg: boolean;
    }
  }
}
