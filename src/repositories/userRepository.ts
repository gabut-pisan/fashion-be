import { prisma } from "../prisma"

const getById = async (id: number) => await prisma.user.findUnique({
  where: { id }
});

export const userRepository = {
  getById,
};
