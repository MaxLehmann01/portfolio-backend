/* Schemas */
import Tech from "../../../schemas/Tech.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};

    const techs = await Tech.find();

    resData.data = techs;
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}