import { prisma } from "../prisma"
import { getAuthorizationToken } from "../utils/api";

const generateToken = async () => { }

const findAuthorizedUser = async (rawOrHeaderToken?: string) => {
  if (!rawOrHeaderToken) return null;
  let accessToken = rawOrHeaderToken;
  if (rawOrHeaderToken.toLowerCase().includes('bearer')) {
    accessToken = getAuthorizationToken(rawOrHeaderToken);
  }

  return await prisma.user.findFirst({
    where: {
      UserToken: {
        every: {
          accessToken,
        }
      }
    }
  });
}

export const authRepository = {
  generateToken,
  findAuthorizedUser,
}
