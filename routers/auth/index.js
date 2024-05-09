/* Dependencies */
import express from "express";

/* Middleware */
import jwtMiddleware from "../../middleware/jwtMiddleware.js";

/* Routes */
import GET from "./routes/GET.js";
import POSTAuthorize from "./routes/POST-Authorize.js";
import POSTToken from "./routes/POST-Token.js";
import DELETE from "./routes/DELETE.js"

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/', jwtMiddleware, GET);
router.post('/authorize', POSTAuthorize);
router.post('/token', POSTToken);
router.delete('/', DELETE);

/* Default-Export */
export default router;