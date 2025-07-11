import { PaginationParams } from "../interfaces/general/api";
import { prisma } from "../prisma";

// TODO: on development and need to add inside database tables

// const paginate = async (paginate: PaginationParams) => await prisma.order.paginate()
//   .withPages(
//     createPaginationParams(paginate)
// );

export const orderRepository = {
  paginate: null,
}