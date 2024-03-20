import supertest from "supertest";
import { app } from "../app";
import { prisma } from "../database/prisma.database";
import "reflect-metadata";
import { container } from "tsyringe";
import { CarService } from "../service/Car.service";

export const carCreateService = container.resolve(CarService).create;
export const carReadAllService = container.resolve(CarService).readAll();
export const carPartialUpdateService = container.resolve(CarService).partialUpdate;
export const retrieveService = container.resolve(CarService).retrive;



export const request = supertest(app);


export const baseURL = "/cars";
export const useTb = prisma.car;

