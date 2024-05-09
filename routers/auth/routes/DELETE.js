/* Schemas */
import RefreshToken from "../../../schemas/RefreshToken.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};

    if(!req.cookies['JWT_RT']) throw new Error(`JWT_RT cookie not set`);
    
    await RefreshToken.deleteOne({ token: req.cookies['JWT_RT']});

    res.clearCookie('JWT_AT', { 
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAMESITE,
    });
    
    res.clearCookie('JWT_RT', { 
      secure: process.env.COOKIE_SECURE === "true",
      sameSite: process.env.COOKIE_SAMESITE,
    });

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    next(err);
  }
}