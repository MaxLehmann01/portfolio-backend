/* Dependencies */
import jwt from "jsonwebtoken";

/* Default-Export */
export default async (req, res, next) => {
  try {
    if(!req.cookies['JWT_AT']) return res.status(401).json({ err: 'jwt-at'});

    jwt.verify(req.cookies['JWT_AT'], process.env.JWT_AT_SECRET, (err, jwtVerified) => {
      if(err) return res.status(403).json({ err: 'jwt-verify'});

      next();
    })
  } catch (err) {
    next(err);
  }
}