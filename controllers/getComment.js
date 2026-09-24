import Comment from "../models/Comment.js";

export const getAllComment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Comment.find({ id });
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "No Comment found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Comments fetched successfully.",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getComment = async (req, res) => {
  try {
    const { postId, commentId } = req.query;
    const result = await Comment.findOne({ postId, _id: commentId });
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "No comment found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Comments fetched successfully.",
      result: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
