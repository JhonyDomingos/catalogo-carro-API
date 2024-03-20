
import { carMock, expectedCarMock } from "../../__mocks__/car.mocks";
import { baseURL, useTb, request } from "../../utils";

describe("Integration Tests: Update Car Route.", () => {

    let carId: string;
    beforeEach(async () => {
      await useTb.deleteMany();
      const car = await useTb.create({ data: carMock });
      carId = car.id
    });
  
    afterAll(async () => {
      await useTb.deleteMany();
    });
  
    test("Should be able to Update a car informations.", async () => {   
  
      const expectValues = {
        id: carId,
        name: expectedCarMock.name,
        description: expectedCarMock.description,
        brand: expectedCarMock.brand,
        year: expectedCarMock.year,
        km: expectedCarMock.km,
      };

      const response = await request.patch(`${baseURL}/${carId}`).send(expectValues);
      
      expect(response.status).toBe(200);
      expect(response.body).toStrictEqual(expectValues);
    });

    test("Should not be  able to Update car with invalid ID.", async () => {
        const invalidCarId = "id_invalido";
    
        const response = await request.patch(`${baseURL}/${invalidCarId}`);
    
        expect(response.status).toBe(404);
      });
  
  
  });
  