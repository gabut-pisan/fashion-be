import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { object, string } from "zod/v4";
import { userRepository } from "../repositories/userRepository";
import { response } from "../utils/api";

export const userApp = new Hono();

userApp.get(
  '/:id',
  zValidator('param', object({
    id: string(),
  })),
  async ({ req, json }) => {
    const param = req.valid('param');
    const res = await userRepository.getById(+param.id);
    return json(response(res));
  }
);
