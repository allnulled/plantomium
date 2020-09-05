require(__dirname + "/../cms.js");

module.exports = {
  development: {
    username: process.env.SCHEMA_DB_USER,
    password: process.env.SCHEMA_DB_PASSWORD,
    database: process.env.SCHEMA_DB_NAME,
    host: process.env.SCHEMA_DB_HOST,
    port: process.env.SCHEMA_DB_PORT,
    dialect: "mysql",
    migrationStorage: "json",
    migrationStoragePath: __dirname + "/migrations.dev.json",
    // migrationStorageTableName: "sequelize_meta",
    // migrationStorageTableSchema: process.env.SCHEMA_DB_NAME
    seederStorage: "json",
    seederStoragePath: __dirname + "/seeders.dev.json",
    // seederStorageTableName: "sequelize_data"
  },
  test: {
    username: process.env.SCHEMA_DB_USER,
    password: process.env.SCHEMA_DB_PASSWORD,
    database: process.env.SCHEMA_DB_NAME,
    host: process.env.SCHEMA_DB_HOST,
    port: process.env.SCHEMA_DB_PORT,
    dialect: "mysql",
    migrationStorage: "json",
    migrationStoragePath: __dirname + "/migrations.test.json",
    // migrationStorageTableName: "sequelize_meta",
    // migrationStorageTableSchema: process.env.SCHEMA_DB_NAME
    seederStorage: "json",
    seederStoragePath: __dirname + "/seeders.test.json",
    // seederStorageTableName: "sequelize_data"
  },
  production: {
    username: process.env.SCHEMA_DB_USER,
    password: process.env.SCHEMA_DB_PASSWORD,
    database: process.env.SCHEMA_DB_NAME,
    host: process.env.SCHEMA_DB_HOST,
    port: process.env.SCHEMA_DB_PORT,
    dialect: "mysql",
    migrationStorage: "sequelize",
    // migrationStoragePath: "migrations.json",
    migrationStorageTableName: "sequelize_meta",
    migrationStorageTableSchema: process.env.SCHEMA_DB_NAME,
    seederStorage: "json",
    seederStoragePath: __dirname + "/seeders.prod.json",
    // seederStorageTableName: "sequelize_data"
  }
}