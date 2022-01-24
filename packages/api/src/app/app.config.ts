const configuration = {
  env: process.env.NODE_ENV ?? 'DEV',
  database:
    process.env.DATABASE_URL ?? 'postgres://psql:psql@127.0.0.1:5432/psql',
  swaggerPath: process.env.SWAGGER_PATH ?? 'api',
  port: process.env.PORT ?? 8080,
  needImport: process.env.NEED_IMPORT === 'true' ?? false,
} as const;

export default configuration;
