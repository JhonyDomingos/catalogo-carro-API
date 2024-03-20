import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express";
import { routes } from "./routes/index.routes";
import { handleError } from "./middlewares/HandleErros.middleware";

export const app: Application  = express()


app.use(json())

app.use("/", routes)

app.use(handleError)