import { Hono } from "hono";

export const cartRoute = new Hono();

cartRoute.get('/', ({ json }) => { return json({}) });

cartRoute.delete('/:id', ({ json }) => { return json({}) });

cartRoute.patch('/:id', ({ json }) => { return json({}) });
