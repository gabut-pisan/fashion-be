import { Hono } from "hono";

export const profileRoute = new Hono();

profileRoute.get('/', ({ json }) => { return json({}) });

profileRoute.post('/change-password', ({ json }) => { return json({}) });

profileRoute.get('/wishlist', ({ json }) => { return json({}) });

profileRoute.delete('/wishlist/:product_id', ({ json }) => { return json({}) });
