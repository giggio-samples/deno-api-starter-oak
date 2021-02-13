import { Migration } from "nessie/mod.ts";

/** Runs on migrate */
export const up: Migration = () => {
  return `
    ALTER TABLE users
    ADD UNIQUE email_unique (email)
  `;
};

/** Runs on rollback */
export const down: Migration = () => {
  return `
    ALTER TABLE users
    DROP INDEX email_unique
  `;
};
