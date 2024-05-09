/* Dependencies */
import express from "express";

/* Middelware */
import jwtMiddleware from "../../middleware/jwtMiddleware.js";

/* Routes */
import GET from "./routes/GET.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/', jwtMiddleware, GET);

/* Default-Export */
export default router;