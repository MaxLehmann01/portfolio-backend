/* Schemas */
import Contact from "../../../schemas/Contact.js";

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

    const contacts = await Contact.find().sort(sortOption);

    resData.data = contacts;
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    next(err);
  }
}