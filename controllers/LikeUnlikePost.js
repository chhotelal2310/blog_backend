import Post from "../models/Post.js";

export const LikeUnlikePost = async (req, res) => {
  try {
    const { userId, postId, action } = req.body;

    if (!userId || !action) {
      res.status(400).json({
        success: false,
        message: "User ID and action are required.",
      });
    }

    if (action !== "like" && action !== "unlike") {
      return res.status(400).json({
        success: false,
        message: "Action must be like or unlike.",
      });
    }

    let update;

    if (action === "like") {
      update = {
        $addToSet: { likes: userId },
        $pull: { unlikes: userId },
      };
    } else {
      update = {
        $addToSet: { unlikes: userId },
        $pull: { likes: userId },
      };
    }

    const post = await Post.findByIdAndUpdate(postId, update, { new: true });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Post ${action}d successfully.`,
      post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
