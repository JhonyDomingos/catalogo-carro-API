import { TCarCreate, TCarReturn, TCarUpdate } from "../interface/car.interface";
import { prisma } from "../database/prisma.database";
import { returnCarSchema } from "../schema/car.schema";
import { injectable, registry } from "tsyringe";


@injectable()
class CarService {    
  public create = async (payload: TCarCreate): Promise<TCarReturn> => {
    return returnCarSchema.parse(await prisma.car.create({ data: payload }));
  };
  public readAll = async (): Promise<Array<TCarReturn>> => {
    
    return await prisma.car.findMany()
  };
  public retrive = async (id: string): Promise<TCarReturn> => {
    
    return returnCarSchema.parse(await prisma.car.findUnique({where: {id}}));
  };
  public partialUpdate = async (
    id: string,
    payload: TCarUpdate
  ): Promise<TCarReturn> => {
    return await prisma.car.update({ where: { id }, data: payload });
  };
  public delete = async (id: string ): Promise<void> => {
     await prisma.car.delete({ where: { id } });
  };
}

export { CarService };
