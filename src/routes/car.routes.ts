import { Router } from "express";

import { CarController } from "../controller/Car.controller";
import { container } from "tsyringe";
import { CarService } from "../service/Car.service";
import { ensure } from "../middlewares/Ensure.middleware";
import { createCarSchema, updateCarSchema } from "../schema/car.schema";

const carRouter: Router = Router();

container.registerSingleton("CarService", CarService);
const carController = container.resolve(CarController);

carRouter.post("/", ensure.validateBody(createCarSchema), (req, res) =>
  carController.create(req, res)
  );

carRouter.get("/", (req, res) => carController.read(req, res));

carRouter.use("/:id", ensure.idExists);
carRouter.get("/:id",  (req, res) => carController.retrieve(req, res));
carRouter.patch("/:id", ensure.validateBody(updateCarSchema), (req, res) =>
  carController.update(req, res)
);
carRouter.delete("/:id", (req, res) => carController.delete(req, res));

export { carRouter };
