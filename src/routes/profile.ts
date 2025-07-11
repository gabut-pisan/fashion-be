import { Hono } from "hono";
import { userRepository } from "../repositories/userRepository";
import { getAuthorizationToken, response, responseMessage } from "../utils/api";
import { authRepository } from "../repositories/authRepository";
import { zValidator } from "@hono/zod-validator";
import { object, string } from "zod/v4";

export const profileApp = new Hono();

profileApp.get('/', async ({ req, json }) => {
  const token = getAuthorizationToken(req.header('Authorization')!);
  const res = await authRepository.findAuthorizedUser(token);
  return json(response(res));
});

profileApp.post(
  '/change-password',
  zValidator('form', object({
    password: string(),
  })),
  async ({ req, status, json }) => {
    const { password } = req.valid('form');

    const user = await authRepository.findAuthorizedUser(req.header('Authorization'));
    const isPasswordUpdated = await userRepository.changePassword(user!.id, { password });

    if (!isPasswordUpdated) {
      status(400);
      return json(responseMessage('Update password failed'));
    };

    return json(responseMessage('Password has been updated'));
  });
