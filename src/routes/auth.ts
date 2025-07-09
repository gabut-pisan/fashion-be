import { Hono } from "hono";

export const authApp = new Hono();

authApp.post('/login', ({ json }) => { return json({}) });

authApp.post('/login/provider', ({ json }) => { return json({}) });

authApp.get('/login/:provider/callback', ({ json, req }) => { return json({provider: req.param('provider') }) });

authApp.post('/register', ({ json }) => { return json({}) });

authApp.post('/forgot-password', ({ json }) => { return json({}) });

authApp.post('/change-password', ({ json }) => { return json({}) });
