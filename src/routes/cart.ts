import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { number, object, string } from "zod/v4";
import { cartRepository } from "../repositories/cartRepository";
import { response, responseMessage, responsePagination } from "../utils/api";
// import { authorize } from "../middlewares/authorize";
import { authRepository } from "../repositories/authRepository";

export const cartApp = new Hono();

// cartApp.use(authorize());

cartApp.get(
  '/',
  zValidator('query', object({
    page: string().optional(),
    limit: string().optional(),
  })),
  async ({ req, json }) => {
    const query = req.valid('query');
    const user = await authRepository.findAuthorizedUser(req.header('Authorization'));
    const [products, meta] = await cartRepository.paginate({
      ...query,
      userId: user!.id,
    });

    return json(responsePagination(products, meta));
  }
);

cartApp.post(
  '/',
  zValidator('form', object({
    quantity: number(),
    productId: number(),
  })),
  async ({ req, json }) => {
    const form = req.valid('form');

    const user = await authRepository.findAuthorizedUser(req.header('Authorization'));
    const res = await cartRepository.create({ userId: user!.id, ...form });

    return json(response(res, 'Product has been added to cart'));
  });

cartApp.patch('/:id', ({ json }) => { return json({}) });

cartApp.delete(
  '/:id',
  zValidator('param', object({
    id: string(),
  })),
  async ({ req, json }) => {
    const param = req.valid('param');
    const user = await authRepository.findAuthorizedUser(req.header('Authorization'));
    await cartRepository.remove({ id: +param.id, userId: user!.id });

    return json(responseMessage('Product has been removed from cart'));
  });

