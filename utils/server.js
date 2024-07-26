/* Dependencies */
import express from "express";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

/* Utils */
import utilLib from "./lib.js";
import utilLogger from "./logger.js";

/* Routers */
import routerIndex from "../routers/index/index.js";
import routerAuth from "../routers/auth/index.js";
import routerContent from "../routers/content/index.js";
import routerProjects from "../routers/projects/index.js";
import routerContacts from "../routers/contacts/index.js";
import routerTechs from "../routers/techs/index.js";
import routerVisits from "../routers/visits/index.js";

/* Non-Exports */
const app = express();
const router = express.Router();
const useMiddleware = () => {
  app.use(cors(utilLib.getCorsOpts()));
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: '100mb' }))
  app.use('/api', router);
}

const useRouters = () => {
  router.use('/', routerIndex);
  router.use('/auth', routerAuth);
  router.use('/content', routerContent);
  router.use('/projects', routerProjects);
  router.use('/contacts', routerContacts);
  router.use('/techs', routerTechs);
  router.use('/visits', routerVisits);
}

const useErrorHandlers = () => {
  app.use(utilLib.routeNotFound);

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => { 
    res.status(err.status || 500).json({ err: err.message });
  })
}

/* Direct-Exports */
export const init = () => {
  useMiddleware();
  useRouters();
  useErrorHandlers();
  server.listen(process.env.PORT, () => utilLogger.info(`Successfully started Server on Port ${process.env.PORT}`, 'success'));
}

export const server = http.createServer(app);

/* Default-Export */
export default {
  init,
  server
}