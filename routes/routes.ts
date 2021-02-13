import { Router } from "oak/mod.ts";
import { Context } from "./../types.ts";
import * as authRoutes from "./auth.routes.ts";
import * as userRoutes from "./user.routes.ts";

const router: Router = new Router();

router.get("", (ctx: Context) => {
  ctx.response.body = "hello world";
});

router
  .post("/login", ...authRoutes.login)
  .post("/register", ...authRoutes.register)
  .post("/token", ...authRoutes.refreshToken);

router
  .get("/users", ...userRoutes.getUsers)
  .get("/users/:id", ...userRoutes.getUserById)
  .put("/users/:id", ...userRoutes.updateUser)
  .delete("/users/:id", ...userRoutes.deleteUser);

export { router };
