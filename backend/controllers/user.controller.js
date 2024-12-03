import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { UserModel } from '../models/user.model.js';

const createToken = (id, expiresIn) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existedUser = await UserModel.findOne({ email });
    if (existedUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Enter valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const accessToken = createToken(user._id, "15m"); // Short-lived access token
    const refreshToken = createToken(user._id, "7d"); // Long-lived refresh token

    res.json({
      success: true,
      message: "Registration successful",
      name,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const comparedPassword = await bcryptjs.compare(password, user.password);
    if (!comparedPassword) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const accessToken = createToken(user._id, "15m"); // Short-lived access token
    const refreshToken = createToken(user._id, "7d"); // Long-lived refresh token

    return res.json({
      success: true,
      message: "Logged in",
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred during login",
    });
  }
};

const admiLogin = async (req,res) =>{
  try {
    const {email,password} = req.body;

    if(email === process.env.ADMIN_EMAIL &&  password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({
        success : true,
        message:"Admin Logged In",
        token
      })
    }else{
      res.json({
        success : false,
        message:"Invalid Credentials"
      })
    }
  } catch (error) {
    console.log(error);
    
    res.json({
      success : false,
      message:error.message
    })
  }
}

const refreshToken = (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Refresh token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid refresh token' });
    }

    const accessToken = createToken(decoded.id, '15m'); // Generate new access token
    res.json({
      success: true,
      accessToken,
    });
  });
};

export { registerUser, loginUser, refreshToken,admiLogin };
