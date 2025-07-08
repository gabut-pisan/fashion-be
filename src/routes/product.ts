import { Hono } from "hono";
import { prisma } from "../prisma";
import { createPaginationParams, createResponse, createResponsePagination } from "../utils/api";

export const productRoute = new Hono();

productRoute.get('/', async ({ json, req }) => {
  const [products, meta] = await prisma.product
    .paginate()
    .withPages(createPaginationParams(req));

  return json(
    createResponsePagination(products, meta, "Products taken successfully")
  );
});

productRoute.get('/:id', async ({ json, req }) => {
  console.log(req.param('id'));
  const id = +req.param('id');
  const res = await prisma.product.findFirst({
    where: {
      id,
    }
  });

  return json(createResponse(res));
});

productRoute.post('/add/cart', ({ json }) => { return json({}) });

productRoute.post('/add/wishlist', ({ json }) => { return json({}) });
