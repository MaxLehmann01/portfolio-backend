/* Schemas */
import Tech from "../../../schemas/Tech.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { id: _id } = req.params;
    const { name, icon: { filename, base64, type }, url } = req.body;

    await Tech.findByIdAndUpdate(_id, { name, icon: { filename, base64, type }, url });

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}