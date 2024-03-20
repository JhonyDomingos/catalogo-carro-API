const createCarSericeMock = {
  bodyData: {
    name: "UNO",
    description: "Uma descrição",
    brand: "FIAT",
    year: 1997,
    km: 30.0,
  },
  expectedValues: {
    id: expect.any(String),
    name: "UNO",
    description: "Uma descrição",
    brand: "FIAT",
    year: 1997,
    km: 30.0,
  },
};

const createCarSericeMockPartial = {
  bodyData: {
    name: "UNO",
    brand: "FIAT",
    year: 1997,
    km: 30.0,
  },
  expectedValues: {
    id: expect.any(String),
    name: "UNO",
    description: null,
    brand: "FIAT",
    year: 1997,
    km: 30.0,
  },
};
export { createCarSericeMock, createCarSericeMockPartial };
