import { Hono } from "hono";

export const profileApp = new Hono();

profileApp.get('/', ({ json }) => { return json({}) });

profileApp.post('/change-password', ({ json }) => { return json({}) });
