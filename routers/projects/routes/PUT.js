/* Schemas */
import Project from "../../../schemas/Project.js";
import Tech from "../../../schemas/Tech.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { id: _id } = req.params;
    const { name, descriptions, banner, repositories, version, urls, techs } = req.body;

    await Project.findByIdAndUpdate(_id, { name, descriptions, banner, repositories, version, urls, techs, timestamp: new Date() });

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}