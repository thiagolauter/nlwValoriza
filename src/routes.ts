import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", ensureAdmin, createUserController.handle);
router.post("/tags", createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle)

export { router };