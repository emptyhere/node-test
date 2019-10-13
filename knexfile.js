// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'mytestdb',
      user:     'postgres',
      password: 'newpassword'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'mytestdb',
      user:     'postgres',
      password: 'newpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'mytestdb',
      user:     'postgres',
      password: 'newpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
