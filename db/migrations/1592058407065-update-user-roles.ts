import { Migration } from "nessie/mod.ts";

/** Runs on migrate */
export const up: Migration = () => {
  return `
    ALTER TABLE users
    ADD roles varchar(256) AFTER email;
  `;
};

/** Runs on rollback */
export const down: Migration = () => {
  return `
    ALTER TABLE users DROP roles;
  `;
};
