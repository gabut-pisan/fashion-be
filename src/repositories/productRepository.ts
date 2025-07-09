import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

const paginate = async (paginate: PaginationParams) => {
  return await prisma.product.paginate()
    .withPages(createPaginationParams(paginate));
}

const getById = async (id: number) => {
  return await prisma.product.findFirst({
    where: { id }
  });
}

export const productRepository = {
  paginate,
  getById,
}
