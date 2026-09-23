import User from "../models/User.js";
import Counter from "../models/Counter.js";

const getNextSequence = async (name) => {
  const counter = await Counter.findOneAndUpdate(
    { _id: name },
    { $inc: { sequence: 1 } },
    {
      new: true,
      upsert: true,
    },
  );

  return counter.sequence;
};

export const SignupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    /*-----------1. Check required fields---------------*/
    if (!name || !email || !password) {
      res.status(404).json({
        success: false,
        message: "All field is requird.",
      });
    }

    /*---------- 2. Check if user already exists-----------*/
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    /*--------------3. Generate next user sequence-----------*/
    const sequence = await getNextSequence("user");

    /*--------------4. Generate custom user ID-----------------*/
    const userId = `BLOG${new Date().getFullYear()}${String(sequence).padStart(7, "0")}`;

    /*--------------5. Create user-----------------------------*/
    const user = await User.create({
      userId,
      name,
      email,
      password,
    });
    return res.status(202).json({
      success: true,
      message: "Account created successfully.",
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};


