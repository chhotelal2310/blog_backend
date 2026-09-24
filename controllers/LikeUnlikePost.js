import Post from "../models/Post.js";

export const LikeUnlikePost = async (req, res) => {
  try {
    const { userId, postId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }
    const alreadyLiked = post.likes.includes(userId);

    const updatePost = await Post.findByIdAndUpdate(
      postId,
      alreadyLiked
        ? {
            $pull: {
              likes: userId,
            },
          }
        : {
            $addToSet: {
              likes: userId,
            },
          },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      message: alreadyLiked
        ? "Post unliked successfully."
        : "Post liked successfully.",
      result: updatePost,
    });

    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
