import { Hono } from "hono";
import { authRepository } from "../repositories/authRepository";

// TODO: on development and need to add inside database tables

export const orderApp = new Hono();

orderApp.get('/', async ({ req, json }) => {
  // const user = await authRepository.findAuthorizedUser(req.header('Authorization'));

  // return json({})
 });

orderApp.get('/:id', ({ json }) => { return json({}) });

orderApp.post('/', ({ json }) => { return json({}) });

orderApp.post('/callback', ({ json }) => { return json({}) });
