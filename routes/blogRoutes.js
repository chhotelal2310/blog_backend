import { Router } from "express";
import { SignupUser } from "../controllers/SignupUser.js";
import { createPost } from "../controllers/CreatePost.js";
import { LikeUnlikePost } from "../controllers/LikeUnlikePost.js";
import { commetOnPost } from "../controllers/commentOnPost.js";

const router = Router();

/*------------Routes----------------*/
router.post("/signup", SignupUser);
router.post("/createPost", createPost);
router.post("/likeUnlikePost", LikeUnlikePost);
router.post("/comment", commetOnPost);

export default router;
