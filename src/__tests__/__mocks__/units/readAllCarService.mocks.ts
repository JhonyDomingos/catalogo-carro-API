// Mocks para ler todos os carros existentes
export const readAllCarServiceMock = {
  expectedValues: [
    {
      id: expect.any(String),
      name: "Fiesta",
      description: "A popular car",
      brand: "Ford",
      year: 2022,
      km: 5000,
    },
    {
      id: expect.any(String),
      name: "Civic",
      description: "A reliable car",
      brand: "Honda",
      year: 2020,
      km: 8000,
    },
  ],
};

export const recivedValues = {
  recivedMock: [
    {
      name: "Fiesta",
      description: "A popular car",
      brand: "Ford",
      year: 2022,
      km: 5000,
    },
    {
      name: "Civic",
      description: "A reliable car",
      brand: "Honda",
      year: 2020,
      km: 8000,
    },
  ],
};
