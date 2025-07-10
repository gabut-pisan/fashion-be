import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface FindParams {
  id?: number;
  name?: string;
}

const paginate = async (paginate: PaginationParams) => await prisma.product.paginate()
  .withPages(
    createPaginationParams(paginate)
  );

const find = async (where: FindParams) => await prisma.product.findFirst({
  where,
});


export const productRepository = {
  paginate,
  find,
}
