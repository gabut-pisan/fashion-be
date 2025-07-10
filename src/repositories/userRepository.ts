import { Prisma } from "../../generated/prisma";
import { prisma } from "../prisma"

interface FindParams {
  id?: number;
  email?: string;
  accessToken?: string;
}
const find = async ({ id, email, accessToken }: FindParams) => await prisma.user.findFirst({
  where: {
    id,
    email,
    UserToken: {
      every: {
        accessToken,
      }
    }
  },
});

export const userRepository = {
  find,
};
