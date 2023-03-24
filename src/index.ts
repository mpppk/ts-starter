import { loadEnv } from "./env";

const main = async () => {
  const env = loadEnv();
  console.log(`${env.NODE_ENV}: Hello World`);
};

main();
