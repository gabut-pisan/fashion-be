import { Hono } from "hono";

export const userApp = new Hono();

userApp.get('/:id', ({ json }) => { return json({}) });
