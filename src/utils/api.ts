import { CursorPaginationMeta, PageNumberPaginationMeta } from "prisma-extension-pagination";
import { Response, ResponseCursor, ResponseMessage, ResponsePagination } from "../interfaces/general/api";
import { PageNumberCounters } from "prisma-extension-pagination/dist/types";
import { HonoRequest } from "hono";

interface PaginationParams {
  page: number;
  limit: number;
}

const DEFAULT_MESSAGE = "Success";

export const createPaginationParams = <T extends string = '/'>(
  req: HonoRequest<T, {}>
): PaginationParams => ({
  page: (req.query('page') as unknown as number) || 1,
  limit: (req.query('limit') as unknown as number) || 15,
})

export const createResponseMessage = (message: string = DEFAULT_MESSAGE): ResponseMessage => ({
  message,
});

export const createResponse = <T>(data: T, message: string = DEFAULT_MESSAGE): Response<T> => ({
  message,
  data,
});

export const createResponsePagination = <T>(
  data: T,
  meta: PageNumberPaginationMeta & PageNumberCounters,
  message: string = DEFAULT_MESSAGE
): ResponsePagination<T> => {
  return {
    message,
    meta: {
      current_page: meta.currentPage,
      total_page: meta.pageCount,
      total_data: meta.totalCount,
      prev_page: meta.previousPage,
      next_page: meta.nextPage,
    },
    data,
  };
}

export const createResponseCursor = <T>(
  data: T,
  meta: CursorPaginationMeta,
  message: string = DEFAULT_MESSAGE
): ResponseCursor<T> => {
  return {
    message,
    meta: {
      has_prev: meta.hasPreviousPage,
      has_next: meta.hasNextPage,
      start: meta.startCursor,
      end: meta.endCursor,
    },
    data,
  };
}
