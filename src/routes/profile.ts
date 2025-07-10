import { Hono } from "hono";
import { userRepository } from "../repositories/userRepository";
import { response } from "../utils/api";

export const profileApp = new Hono();

profileApp.get('/', async ({ req, json }) => {
  const token = req.header('Authorization');
  const res = await userRepository.find({
    accessToken: token!,
  });
  return json(response(res))
});

profileApp.post('/change-password', ({ json }) => { return json({}) });
