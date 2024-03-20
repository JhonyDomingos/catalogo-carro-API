import { PrismaClient } from "@prisma/client";

const env = process.env.NODE_ENV;

const prisma = new PrismaClient({ log: env === "test" ? [] : ["query"] });

export { prisma };
