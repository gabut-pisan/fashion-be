import { Hono } from "hono";

export const orderApp = new Hono();

orderApp.get('/', ({ json }) => { return json({}) });

orderApp.get('/:id', ({ json }) => { return json({}) });

orderApp.post('/', ({ json }) => { return json({}) });

orderApp.post('/callback', ({ json }) => { return json({}) });
