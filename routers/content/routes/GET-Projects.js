/* Schemas */
import Project from "../../../schemas/Project.js";
import Tech from "../../../schemas/Tech.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};

    const projects = await Project.find().lean();

    for(let project of projects) {
      for (let i = 0; i < project.techs.length; i++) {
        let tech = await Tech.findById(project.techs[i]).lean();
        if(!tech) continue;

        project.techs[i] = tech;
      }
    }

    resData.data = projects;
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}