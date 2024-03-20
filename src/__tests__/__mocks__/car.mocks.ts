export const carMock = {
    name: "fiesta",
    description: "a car from older",
    brand: "ford",
    year: 2023,
    km: 16000,
  };

export const expectedCarMock = {
   name: "Updated",
  description: "Updated description",
  brand: "Updated brand",
  year: 2000,
  km: 5000,
}

export const partialCar = {
    name: "HB20",
    brand: "Hyunday",
    year: 2023,
    km: 10.000,
  };

export const invalidBody1 = { }

export const invalidBody2 = {
    name: 1234,
	description: 5678,
	brand: 9101112,
	year: "2020", 
	km: "16000"
}

