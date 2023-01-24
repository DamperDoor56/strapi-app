module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-28.railway.app'),
      port: env.int('DATABASE_PORT', 5639),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'SRhMFswwMYAyArEIRjBE'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
