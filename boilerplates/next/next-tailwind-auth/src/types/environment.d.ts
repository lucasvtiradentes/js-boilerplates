export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      GOOGLE_ID: string;
      GOOGLE_SECRET: string;
      JWT_SECRET: string;
      MONGO_URL: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }
}
