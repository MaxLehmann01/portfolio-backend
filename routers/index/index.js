/* Dependencies */
import express from "express";

/* Routes */
import GETHealthcheck from "./routes/GET-Healthcheck.js";
import POST from "./routes/POST.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/healthcheck', GETHealthcheck);
router.post('/', POST);

/* Default-Export */
export default router;