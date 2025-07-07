import { Hono } from "hono";

export const productRoute = new Hono();

productRoute.get('/', ({ json }) => { return json({}) });

productRoute.get('/:id', ({ json }) => { return json({}) });

productRoute.post('/add/cart', ({ json }) => { return json({}) });

productRoute.post('/add/wishlist', ({ json }) => { return json({}) });
