/* Dependencies */
import jwt from "jsonwebtoken";

/* Schemas */
import RefreshToken from "../../../schemas/RefreshToken.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { password } = req.body;

    if (password !== process.env.ADMIN_PASS) throw new Error("invalid password");

    const timestampSignIn = new Date();

    const jwtTokens = {
      accessToken: jwt.sign({ timestampSignIn }, process.env.JWT_AT_SECRET, { expiresIn: process.env.JWT_AT_EXP }),
      refreshToken: jwt.sign({ timestampSignIn }, process.env.JWT_RT_SECRET, { expiresIn: process.env.JWT_RT_EXP })
    }

    const refreshToken = new RefreshToken({ 
      token: jwtTokens.refreshToken, 
      expiresAt: new Date(Date.now() + Number(process.env.JWT_RT_EXP_NUM)) 
    });

    await refreshToken.save();

    res.cookie('JWT_AT', jwtTokens.accessToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAMESITE,
      maxAge: process.env.JWT_AT_EXP_NUM
    });

    res.cookie('JWT_RT', jwtTokens.refreshToken, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAMESITE,
      maxAge: process.env.JWT_RT_EXP_NUM
    });

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    next(err);
  }
}