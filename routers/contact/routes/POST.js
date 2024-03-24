/* Schemas */
import Contact from "../../../schemas/Contact.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};
    const { name, email, subject, message } = req.body;

    if(!name || !email || !subject || !message) throw new Error('missing required fields');

    const contact = new Contact({ name, email, subject, message, timestamp: new Date() });
    await contact.save();

    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    next(err);
  }
}