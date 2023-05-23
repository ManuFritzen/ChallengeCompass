export const dbconfig = {
  type: 'sqlite',
  database: 'database.db',
  entities: [__dirname + '../**/*.entity{.ts,.js}'],
  // synchronize: true,
};