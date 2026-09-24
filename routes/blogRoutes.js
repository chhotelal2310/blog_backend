import { Router } from "express";
import { SignupUser } from "../controllers/SignupUser.js";
import { createPost } from "../controllers/CreatePost.js";
import { LikeUnlikePost } from "../controllers/LikeUnlikePost.js";
import { commetOnPost } from "../controllers/commentOnPost.js";
import { getAllPost, getPost } from "../controllers/getPost.js";
import { getAllComment, getComment } from "../controllers/getComment.js";

const router = Router();

/*------------Routes----------------*/
router.post("/signup", SignupUser);
router.post("/createPost", createPost);
router.post("/likeUnlikePost", LikeUnlikePost);
router.post("/comment", commetOnPost);


router.get("/getpost", getAllPost);
router.get("/getpost/:id", getPost)
router.get("/allcomment/:id", getAllComment);
router.get("/comment", getComment);



export default router;
