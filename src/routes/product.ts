import { Hono } from "hono";
import { response, responsePagination } from "../utils/api";
import { zValidator } from "@hono/zod-validator";
import { object, string } from "zod/v4";
import { productRepository } from "../repositories/productRepository";

export const productApp = new Hono();

productApp.get(
  '/',
  zValidator('query', object({
    page: string().optional(),
    limit: string().optional(),
  })),
  async ({ json, req }) => {
    const query = req.valid('query');
    const [products, meta] = await productRepository.paginate(query);
    return json(responsePagination(products, meta));
  }
);

productApp.get(
  '/:id',
  zValidator('param', object({
    id: string(),
  })),
  async ({ json, req }) => {
    const param = req.valid('param');
    const res = await productRepository.find({
      id: +param.id,
    });
    return json(response(res));
  }
);
