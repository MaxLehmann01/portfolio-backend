/* Schemas */
import Tech from "../../../schemas/Tech.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { name, icon: { filename, base64, type }, url } = req.body;

    const tech = new Tech({ name, icon: { filename, base64, type }, url });
    await tech.save();

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}