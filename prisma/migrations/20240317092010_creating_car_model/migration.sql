-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" VARCHAR(255),
    "brand" VARCHAR(100) NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
