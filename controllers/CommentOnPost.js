import Comment from "../models/Comment.js";
import Post from "../models/Post.js";

export const commetOnPost = async (req, res) => {
  try {
    const { userId, comment, postId } = req.body;
    if (!userId || !comment) {
      return res.status(400).json({
        success: false,
        message: "User ID and comment are required.",
      });
    }
    const isPostExisting = await Post.findById(postId);
    if (!isPostExisting) {
      return res.status(400).json({
        success: false,
        message: "Post not foud",
      });
    }
    const result = await Comment.create({ postId, userId, comment });
    return res.status(200).json({
      success: true,
      message: "Comment Successfully.",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
