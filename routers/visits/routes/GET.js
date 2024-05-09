/* Schemas */
import Visit from "../../../schemas/Visit.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { sort, 'sort-direction': sortDirection } = req.query;

    let sortOption = {};

    if(sort) {
      const validSortDirectory = [ 'asc', 'desc' ];
      const srtDir = sortDirection || 'asc';

      if(validSortDirectory.includes(srtDir)) sortOption[sort] = srtDir;
      else throw new Error('invalid sort direction')
    }

    const visits = await Visit.find().sort(sortOption);

    resData.data = visits;
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}