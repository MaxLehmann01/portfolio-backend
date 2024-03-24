/* Dependencies */
import express from "express";

/* Routes */
import GET from "./routes/GET.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/', GET);

/* Default-Export */
export default router;