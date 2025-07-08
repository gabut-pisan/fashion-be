export interface ResponseMessage {
  message: string;
}

export interface Response<T> {
  message: string;
  data: T;
}

export interface ResponsePagination<T> {
  message: string;
  meta: {
    current_page: number;
    total_data: number;
    total_page: number;
    prev_page: number | null;
    next_page: number | null;
  };
  data: T;
}

export interface ResponseCursor<T> {
  message: string;
  meta: {
    has_prev: boolean;
    has_next: boolean;
    start: string | null;
    end: string | null;
  };
  data: T;
}
