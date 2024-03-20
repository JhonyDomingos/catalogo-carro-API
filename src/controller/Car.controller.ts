import { Request, Response } from "express";
import { CarService } from "../service/Car.service";
import { TCarCreate, TCarReturn, TCarUpdate } from "../interface/car.interface";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarController {
  constructor(@inject("CarService") private carService: CarService) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const newCar: TCarCreate = await this.carService.create(req.body);
    return res.status(201).json(newCar);
  };
  public read = async (_: Request, res: Response): Promise<Response> => {    
   
    return res.status(200).json( await this.carService.readAll());
  };
  public retrieve = async (req: Request, res: Response): Promise<Response> => {
    
    const car: TCarReturn = await this.carService.retrive(req.params.id);
    console.log(req.params.id)
    return res.status(200).json(car);
  };
  public update = async (req: Request, res: Response): Promise<Response> => {
    const carId = req.params.id;
    const updateCar: TCarUpdate = await this.carService.partialUpdate(
      carId,
      req.body
    );
    return res.status(200).json(updateCar);
  };
  public delete = async (req: Request, res: Response): Promise<Response> => {
    await this.carService.delete(req.params.id);
    return res.status(204).json();
  };
}
