/* Dependencies */
import express from "express";

/* Middleware */
import jwtMiddleware from "../../middleware/jwtMiddleware.js";

/* Routes */
import GET from "./routes/GET.js";
import POST from "./routes/POST.js";
import PUT from "./routes/PUT.js";
import DELETE from "./routes/DELETE.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/', jwtMiddleware, GET);
router.post('/', jwtMiddleware, POST);
router.put('/:id', jwtMiddleware, PUT);
router.delete('/:id', jwtMiddleware, DELETE);

/* Default-Export */
export default router;