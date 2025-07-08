import { pagination } from "prisma-extension-pagination";
import { PrismaClient } from "../generated/prisma";

export const prisma = new PrismaClient()
  .$extends(pagination({
    pages: {
      limit: 15,
      includePageCount: true,
    },
    cursor: {
      limit: 15,
    },
  }));
