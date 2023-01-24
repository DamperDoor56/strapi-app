module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-127.railway.app'),
      port: env.int('DATABASE_PORT', 7876),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'PGMl5pgjp6INsFiN4lw1'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
