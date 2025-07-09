import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { number, object, string } from "zod/v4";
import { cartRepository } from "../repositories/cartRepository";
import { response, responsePagination } from "../utils/api";
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
    const [products, meta] = await cartRepository.paginate(query);
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

    const token = await authRepository.validateToken(req.header('Authorization')!);
    const res = await cartRepository.create({ userId: token?.userId!, ...form });

    return json(response(res, 'Product has been added to cart'));
  });

cartApp.delete('/:id', ({ json }) => { return json({}) });

cartApp.patch('/:id', ({ json }) => { return json({}) });
