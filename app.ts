import { oakCors } from "cors/mod.ts";
import { Application } from "oak/mod.ts";
import * as middlewares from "./middlewares/middlewares.ts";
import { router } from "./routes/routes.ts";
import { Context } from "./types.ts";

const port = 8000;
const app = new Application<Context>();

app.use(oakCors());
app.use(middlewares.errorMiddleware);
app.use(middlewares.loggerMiddleware);
app.use(middlewares.timingMiddleware);
app.use(middlewares.JWTAuthMiddleware);

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

await app.listen({ port });
