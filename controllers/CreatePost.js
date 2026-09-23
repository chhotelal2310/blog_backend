import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const result = await Post.create({
      title,
      content,
      author,
    });

    return res.status(200).json({
      success: true,
      message: "Post created successfully.",
      post: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
