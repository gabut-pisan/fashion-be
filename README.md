# Fasyon Backend

## Install
1. Duplikat `.env.example` dan rename menjadi `.env`
2. Ganti credential database pada variable `DATABASE_URL` di `.env`
3. run `bun install`
4. run `bun prisma db push` dan `bun prisma db seed`. Kamu bisa juga gunakan command `bun prisma migrate dev`
5. run `bun dev` dan development server akan mulai

## Development Guide
> Guide ini bertujuan untuk menjaga codebase agar tetap konsisten. Gunakan dengan sebaik mungkin.

### Membuat pagination params untuk pagination `withPages()`
Gunakan function `createPaginationParams()`.

### Return response
Ketika kita hendak return response data, maka kita perlu memanggil salah satu dari 3 function yang disimpan di dalam `/src/utils/api.ts`:
1. `responseMessage()`, return response berisi message saja
2. `response()`, return response dengan 1 data atau multiple tanpa pagination
3. `responsePagination()`, return response dengan page-based pagination
4. `responseCursor()`, return response dengan cursor pagination
