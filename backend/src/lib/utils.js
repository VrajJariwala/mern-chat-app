import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // console.log("Generated Token:", token);
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //MS
    httpOnly: true, //prevent xss attack cross-site scripting attack
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};