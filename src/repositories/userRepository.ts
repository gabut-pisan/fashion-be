import { prisma } from "../prisma"

interface FindParams {
  id?: number;
  email?: string;
}

interface UpdatePasswordParams {
  password?: string;
}

const find = async (where: FindParams) => await prisma.user.findFirst({
  where,
});

const changePassword = async (id: number, { password }: UpdatePasswordParams) =>
  await prisma.user.update({
    where: { id },
    data: {
      password,
    }
  });

export const userRepository = {
  find,
  changePassword,
};
