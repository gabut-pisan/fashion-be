import { Hono } from "hono";

export const authRoute = new Hono();

authRoute.post('/login', ({ json }) => { return json({}) });

authRoute.post('/login/provider', ({ json }) => { return json({}) });

authRoute.get('/login/:provider/callback', ({ json, req }) => { return json({provider: req.param('provider') }) });

authRoute.post('/register', ({ json }) => { return json({}) });

authRoute.post('/forgot-password', ({ json }) => { return json({}) });

authRoute.post('/change-password', ({ json }) => { return json({}) });
