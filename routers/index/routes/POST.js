/* Dependencies */
import axios from "axios";

/* Schemas */
import Visit from "../../../schemas/Visit.js";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    const ip = req.headers['x-real-ip'] || req.ip;

    if(ip === "::1") return res.sendStatus(200);

    const responseIpInfo = await axios.get(`https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`);

    const visit = new Visit(responseIpInfo.data);
    await visit.save();

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
}