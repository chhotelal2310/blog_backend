import Post from "../models/Post.js";

export const getAllPost = async (req, res) => {
  try {
    const result = await Post.find();
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }
    return res.status(200).json({
      success: true,
      messsage: "Data found successfully!",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Post.findById(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      });
    }
    return res.status(200).json({
      success: true,
      messsage: "Data found successfully!",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
