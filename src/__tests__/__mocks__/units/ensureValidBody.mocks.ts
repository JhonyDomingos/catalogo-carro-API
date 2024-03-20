import { ZodError, z } from "zod";

const validSchemaMock = z.object({
  email: z.string().email(),
  password: z.string(),
  admin: z.boolean(),
});

const validBodyMock = {
  bodyData: {
    email: "teste@mail.com",
    password: "132456489",
    admin: false,
    extraKey: 3123123,
  },

  expectedValue: {
    email: "teste@mail.com",
    password: "132456489",
    admin: false,
  },
};
const InvalidBodyMock = {
  bodyData: {},

  expectedValue: ZodError,
};

export { validBodyMock, validSchemaMock, InvalidBodyMock };
