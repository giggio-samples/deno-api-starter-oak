import { create, getNumericDate, Header, Payload, verify } from "djwt/mod.ts";
import { config } from "./../config/config.ts";

const {
  JWT_TOKEN_SECRET,
  JWT_ACCESS_TOKEN_EXP,
  JWT_REFRESH_TOKEN_EXP,
} = config;

const header: Header = {
  alg: "HS256",
  typ: "JWT",
};

// deno-lint-ignore no-explicit-any
const getAuthToken = (user: any) => {
  const payload: Payload = {
    iss: "deno-api",
    id: user.id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    exp: getNumericDate(parseInt(JWT_ACCESS_TOKEN_EXP)),
  };

  return create(header, payload, JWT_TOKEN_SECRET);
};

// deno-lint-ignore no-explicit-any
const getRefreshToken = (user: any) => {
  const payload: Payload = {
    iss: "deno-api",
    id: user.id,
    exp: getNumericDate(parseInt(JWT_REFRESH_TOKEN_EXP)),
  };

  return create(header, payload, JWT_TOKEN_SECRET);
};

const getJwtPayload = async (token: string): Promise<Payload | null> => {
  try {
    const payload = await verify(token, JWT_TOKEN_SECRET, header.alg);
    if (payload) {
      return payload as { id?: number };
    }
    // deno-lint-ignore no-empty
  } catch (err) {}
  return null;
};

export { getAuthToken, getJwtPayload, getRefreshToken };
