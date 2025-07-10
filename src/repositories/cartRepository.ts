import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface FindParams {
  id: number;
}

interface CreateParams {
  quantity: number;
  userId: number;
  productId: number;
}

const paginate = async (paginate: PaginationParams) =>
  await prisma.cart.paginate().withPages(
    createPaginationParams(paginate)
  );


const create = async (data: CreateParams) =>
  await prisma.cart.create({
    data,
  });

const find = async (where: FindParams) =>
  await prisma.cart.findFirst({
    where,
  });

export const cartRepository = {
  paginate,
  create,
  find,
}
