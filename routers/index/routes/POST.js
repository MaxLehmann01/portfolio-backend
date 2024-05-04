/* Dependencies */
import axios from "axios";

/* Schemas */
import Visit from "../../../schemas/Visit.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    if(req.ip === '::1') return res.sendStatus(200);

    const responseIpInfo = await axios.get(`https://ipinfo.io/${req.ip}?token=${process.env.IPINFO_TOKEN}`);

    const visit = new Visit(responseIpInfo.data);
    await visit.save();

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}