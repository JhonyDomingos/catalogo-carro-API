import { Router } from "express";
import { carRouter } from "./car.routes";

const routes: Router = Router();

routes.use("/cars", carRouter);


export { routes}

