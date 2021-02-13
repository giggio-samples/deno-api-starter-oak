import * as bcrypt from "bcrypt/mod.ts";
/**
 * encript given string
 */
const encript = async (password: string) => {
  return await bcrypt.hash(password);
};

/**
 * compare given password and hash
 */
const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export { compare, encript };
