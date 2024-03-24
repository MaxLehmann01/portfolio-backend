/* Dependencies */
import express from "express";

/* Routes */
import POST from "./routes/POST.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.post('/', POST);

/* Default-Export */
export default router;