import { z } from "zod";
import {
  createCarSchema,
  returnCarSchema,
  updateCarSchema,
} from "../schema/car.schema";

type TCarCreate = z.infer<typeof createCarSchema>;
type TCarUpdate = z.infer<typeof updateCarSchema>;
type TCarReturn = z.infer<typeof returnCarSchema>;

export { TCarCreate, TCarUpdate, TCarReturn };
