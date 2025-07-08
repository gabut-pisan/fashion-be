# Fasyon Backend

## Install
1. Duplikat `.env.example` dan rename menjadi `.env`
2. Ganti credential database pada variable `DATABASE_URL` di `.env`
3. run `bun install`
4. run `bun prisma db push` dan `bun prisma db seed`. Kamu bisa juga gunakan command `bun prisma migrate dev`
5. run `bun dev` dan development server akan mulai

## Development Guide
> Guide ini bertujuan untuk menjaga codebase agar tetap konsisten. Gunakan dengan sebaik mungkin.

### Return response
Ketika kita hendak return response data, maka kita perlu memanggil salah satu dari 3 function yang disimpan di dalam `/src/utils/api.ts`:
1. `createResponseMessage()`, return response berisi message saja
2. `createResponse()`, return response dengan 1 data atau multiple tanpa pagination
3. `createResponsePagination()`, return response dengan page-based pagination
4. `createResponseCursor()`, return response dengan cursor pagination
