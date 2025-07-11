import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface PaginateParams {
  userId: number;
}

interface FindParams {
  id: number;
}

interface CreateParams {
  quantity: number;
  productId: number;
}

interface RemoveParams {
  id: number;
}

const paginate = async (paginate: PaginationParams & PaginateParams) =>
  await prisma.cart
    .paginate({ where: { userId: paginate.userId } })
    .withPages(createPaginationParams(paginate));


const create = async (data: CreateParams & PaginateParams) =>
  await prisma.cart.create({
    data,
  });

const find = async (where: FindParams & PaginateParams) =>
  await prisma.cart.findFirst({
    where,
  });

const remove = async (where: RemoveParams & PaginateParams) =>
  await prisma.cart.delete({
    where,
  });

export const cartRepository = {
  paginate,
  find,
  create,
  remove,
}
