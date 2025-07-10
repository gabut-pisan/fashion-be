import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface FindParams {
  id?: number;
  productId?: number;
  userId?: number;
}

interface CreateParams {
  userId: number;
  productId: number;
}

const paginate = async (paginate: PaginationParams) =>
  await prisma.wishlist.paginate().withPages(
    createPaginationParams(paginate)
  );

const find = async (where: FindParams) =>
  await prisma.wishlist.findFirst({
    where,
  });

const create = async (data: CreateParams) =>
  await prisma.wishlist.create({
    data,
  });

const remove = async (id: number) =>
  await prisma.wishlist.delete({
    where: {
      id,
    }
  });

export const wishlistRepository = {
  paginate,
  find,
  create,
  remove,
}
