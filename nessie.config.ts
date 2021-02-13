import { ClientPostgreSQL, ClientMySQL, ClientSQLite   } from "nessie/mod.ts";

/** These are the default config options. */
const clientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
};

const clientMySql = new ClientMySQL(clientOptions, {
  hostname: "localhost",
  port: 3306,
  username: "root",
  password: "example",
  db: "deno_api_db",
});

/** This is the final config object */
const config = {
  client: clientMySql,
  exposeQueryBuilder: true,
};

export default config;
