import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface CreateParams {
  quantity: number;
  userId: number;
  productId: number;
}

const paginate = async (paginate: PaginationParams) => {
  return await prisma.cart.paginate()
    .withPages(createPaginationParams(paginate));
}

const create = async ({ productId, userId, quantity }: CreateParams) => {
  return await prisma.cart.create({
    data: {
      userId,
      productId,
      quantity,
    }
  })
}

const getById = async (id: number) => {
  return await prisma.cart.findFirst({
    where: { id }
  });
}

export const cartRepository = {
  paginate,
  create,
  getById,
}
