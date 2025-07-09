import { prisma } from "../prisma"

export const validateToken = async (accessToken: string) => {
  return await prisma.userToken.findFirst({
    where: {
      accessToken,
    }
  })
}

export const authRepository = {
  validateToken,
}
