import { prisma } from "../prisma"

const generateToken = async () => { }

const validateToken = async (accessToken: string) =>
  await prisma.userToken.findFirst({
    where: {
      accessToken,
    }
  });

export const authRepository = {
  generateToken,
  validateToken,
}
