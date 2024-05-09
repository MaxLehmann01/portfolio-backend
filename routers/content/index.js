/* Dependencies */
import express from "express";

/* Routes */
import GETProjects from "./routes/GET-Projects.js";
import POSTContact from "./routes/POST-Contact.js";

/* Constants */
const router = express.Router();

/* Router-Definition */
router.get('/projects', GETProjects);
router.post('/contact', POSTContact);

/* Default-Export */
export default router;