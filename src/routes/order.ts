import { Hono } from "hono";

export const orderRoute = new Hono();

orderRoute.get('/', ({ json }) => { return json({}) });

orderRoute.get('/:id', ({ json }) => { return json({}) });

orderRoute.post('/', ({ json }) => { return json({}) });

orderRoute.post('/callback', ({ json }) => { return json({}) });
