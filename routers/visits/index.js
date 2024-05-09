/* Dependencies */
import express from "express";

/* Middleware */
import jwtMiddleware from "../../middleware/jwtMiddleware.js";

/* Routes */
import GET from "./routes/GET.js";
import POST from "./routes/POST.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/', jwtMiddleware, GET);
router.post('/', POST);

/* Default-Export */
export default router;