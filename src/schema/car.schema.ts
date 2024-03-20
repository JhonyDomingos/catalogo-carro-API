import { z } from "zod";

const carSchema = z.object({
  id: z.string().uuid().max(36),
  name: z.string().min(2).max(150),
  description: z.string().nullish(),
  brand: z.string().min(2).max(100),
  year: z.number().positive(),
  km: z.number().positive(),
});

const createCarSchema = carSchema.omit({ id: true });
const updateCarSchema = createCarSchema.partial();
const returnCarSchema = carSchema

export { carSchema, createCarSchema, updateCarSchema, returnCarSchema };
