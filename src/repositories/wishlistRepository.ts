import { prisma } from "../prisma"
import { PaginationParams } from "../interfaces/general/api"
import { createPaginationParams } from "../utils/api";

interface CreateParams {
  userId: number;
  productId: number;
}

const paginate = async (paginate: PaginationParams) =>
  await prisma.wishlist.paginate().withPages(
    createPaginationParams(paginate)
  );

const getById = async (id: number) =>
  await prisma.wishlist.findFirst({
    where: { id }
  });

const create = async ({ productId, userId }: CreateParams) =>
  await prisma.wishlist.create({
    data: {
      userId,
      productId,
    }
  });

const remove = async (id: number) =>
  await prisma.wishlist.delete({
    where: {
      id,
    }
  });

export const wishlistRepository = {
  paginate,
  create,
  remove,
  getById,
}
