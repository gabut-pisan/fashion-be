import { prisma } from "../prisma"

const getById = async (id: number) => await prisma.user.findUnique({
  where: { id }
});

const getByToken = async (accessToken: string) => await prisma.user.findFirst({
  where: {
    UserToken: {
      every: {
        accessToken,
      }
    }
  }
});

export const userRepository = {
  getById,
  getByToken,
};
