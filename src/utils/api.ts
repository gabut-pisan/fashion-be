import { CursorPaginationMeta, PageNumberPaginationMeta } from "prisma-extension-pagination";
import { PaginationParams, PaginationResponse, Response, ResponseCursor, ResponseMessage, ResponsePagination } from "../interfaces/general/api";
import { PageNumberCounters } from "prisma-extension-pagination/dist/types";

const DEFAULT_MESSAGE = "Success";

export const getAuthorizationToken = (authorizationHeader: string) =>
  authorizationHeader.toLowerCase().split('bearer ')[1];

export const createPaginationParams = (
  { page, limit }: PaginationParams
): PaginationResponse => ({
  page: typeof page === 'string' ? +page : page,
  limit: typeof limit === 'string' ? +limit : limit,
})

export const responseMessage = (
  message: string = DEFAULT_MESSAGE
): ResponseMessage => ({
  message,
});

export const response = <T>(
  data: T,
  message: string = DEFAULT_MESSAGE
): Response<T> => ({
  message,
  data,
});

export const responsePagination = <T>(
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

export const responseCursor = <T>(
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
