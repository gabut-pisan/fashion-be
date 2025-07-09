import { Hono } from "hono";
// import { bearerAuth } from 'hono/bearer-auth'
import { zValidator } from "@hono/zod-validator";
import { number, object, string } from "zod/v4";
import { wishlistRepository } from "../repositories/wishlistRepository";
import { authRepository } from "../repositories/authRepository";
import { response, responseMessage, responsePagination } from "../utils/api";

export const wishlistApp = new Hono();

// wishlistApp.use(bearerAuth({ token: wishlistA'test }))

wishlistApp.get(
  '/',
  zValidator('query', object({
    page: string().optional(),
    limit: string().optional(),
  })),
  async ({ req, json }) => {
    const query = req.valid('query');
    const res = await wishlistRepository.paginate(query);
    return json(responsePagination(...res));
  }
);

wishlistApp.post(
  '/',
  zValidator('form', object({
    productId: number('ID required'),
  })),
  async ({ req, status, json }) => {
    const form = req.valid('form');

    const token = await authRepository.validateToken(req.header('Authorization')!);
    const res = await wishlistRepository.create({ userId: token?.userId!, productId: form.productId });

    status(201);
    return json(response(res, "Product has been wishlisted"));
  }
);

wishlistApp.delete(
  '/:id',
  zValidator('param', object({
    id: string(),
  })),
  async ({ req, json }) => {
    const form = req.valid('param');
    wishlistRepository.remove(+form.id);
    return json(responseMessage("Product has been deleted"));
  }
);
