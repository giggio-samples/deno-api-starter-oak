import { Migration } from "https://deno.land/x/nessie@v1.0.4/mod.ts";

/** Runs on migrate */
export const up: Migration = () => {
  return `
    ALTER TABLE users
    ADD password varchar(256) AFTER email;
  `;
};

/** Runs on rollback */
export const down: Migration = () => {
  return `
    ALTER TABLE users DROP password;
  `;
};
