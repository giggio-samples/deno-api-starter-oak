import { Application } from "https://deno.land/x/oak@v6.0.2/mod.ts";
import * as middlewares from "./middlewares/middlewares.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
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

await app.listen({ port });
