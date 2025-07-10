import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { email, object, string } from "zod/v4";
import { userRepository } from "../repositories/userRepository";
import { password } from "bun";
import { authRepository } from "../repositories/authRepository";
import { response } from "../utils/api";

export const authApp = new Hono();

authApp.post(
  '/login',
  zValidator('form', object({
    email: email(),
    password: string(),
  })),
  async ({ req, status, json }) => {
    const form = req.valid('form');
    const user = await userRepository.find({
      email: form.email,
    });

    if (!user || !await password.verify(form.password, user.password)) {
      status(401);
      return json({ message: 'Email or password wrong' });
    }

    const res = await authRepository.generateToken();
    return json(response(res, "Logged in successfully"));
  });

authApp.post('/login/provider', ({ json }) => { return json({}) });

authApp.get('/login/:provider/callback', ({ json, req }) => { return json({ provider: req.param('provider') }) });

authApp.post('/register', ({ json }) => { return json({}) });

authApp.post('/forgot-password', ({ json }) => { return json({}) });

authApp.post('/change-password', ({ json }) => { return json({}) });
