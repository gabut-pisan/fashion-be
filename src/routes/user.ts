import { Hono } from "hono";

export const userRoute = new Hono();

userRoute.get('/:id', ({ json }) => { return json({}) });
