import { Seed } from "nessie/mod.ts";
import * as encription from "../../helpers/encription.ts";

export const run: Seed = async () => {
  const password = await encription.encript("123456");
  return `INSERT into users VALUES
    (DEFAULT, 'João da Silva', 'joaodasilva@example.com', 'Admin', '${password}', 1, DEFAULT, DEFAULT)`;
};
