import { faker } from "@faker-js/faker";
import { prisma } from "../src/prisma";
import { password } from "bun";
import { Prisma } from "../generated/prisma";

const client = prisma;

const seedUsers = async () => await client.user.createMany({
  data: [
    {
      name: faker.person.fullName({ sex: 'male' }),
      address: faker.location.streetAddress(),
      placebirth: faker.location.city(),
      datebirth: new Date(2001),
      email: faker.internet.email(),
      gender: 'male',
      password: await password.hash('testing123'),
      phone: faker.phone.number(),
      registerMethod: 'jwt',
    },
    {
      name: faker.person.fullName({ sex: 'female' }),
      address: faker.location.streetAddress(),
      placebirth: faker.location.city(),
      datebirth: new Date(2001),
      email: faker.internet.email(),
      gender: 'female',
      password: await password.hash('testing123'),
      phone: faker.phone.number(),
      registerMethod: 'google',
    },
    {
      name: faker.person.fullName({ sex: 'male' }),
      address: faker.location.streetAddress(),
      placebirth: faker.location.city(),
      datebirth: new Date(2001),
      email: faker.internet.email(),
      gender: 'male',
      password: await password.hash('testing123'),
      phone: faker.phone.number(),
      registerMethod: 'github',
    },
    {
      name: faker.person.fullName({ sex: 'female' }),
      address: faker.location.streetAddress(),
      placebirth: faker.location.city(),
      datebirth: new Date(2001),
      email: faker.internet.email(),
      gender: 'female',
      password: await password.hash('testing123'),
      phone: faker.phone.number(),
      registerMethod: 'facebook',
    }
  ],
});

const seedSizes = async () => await prisma.$transaction([
    client.size.upsert({
      where: { id: 1, name: 'xs' },
      update: { name: 'xs' },
      create: { name: 'xs' },
    }),
    client.size.upsert({
      where: { id: 2, name: 'sm' },
      update: { name: 'sm' },
      create: { name: 'sm' },
    }),
    client.size.upsert({
      where: { id: 3, name: 'md' },
      update: { name: 'md' },
      create: { name: 'md' },
    }),
    client.size.upsert({
      where: { id: 4, name: 'lg' },
      update: { name: 'lg' },
      create: { name: 'lg' },
    }),
    client.size.upsert({
      where: { id: 5, name: 'xl' },
      update: { name: 'xl' },
      create: { name: 'xl' },
    }),
    client.size.upsert({
      where: { id: 6, name: 'xxl' },
      update: { name: 'xxl' },
      create: { name: 'xxl' },
    })
]);

const seedProducts = async () => await prisma.$transaction([
  client.product.create({
    data: {
      name: 'Clothes',
      description: faker.lorem.paragraph({ min: 2, max: 4 }),
      ProductRating: {
        createMany: {
          data: [
            {
              userId: 1,
              description: 'This is good maybe',
              rate: 5,
            },
            {
              userId: 2,
              description: 'What is this??',
              rate: 1,
            },
          ]
        }
      },
      ProductSize: {
        createMany: {
          data: [
            {
              sizeId: 1,
              price: 50000,
              quantity: 5,
            },
            {
              sizeId: 2,
              discountType: 'amount',
              discountValue: 20000,
              price: 50000,
              quantity: 5,
            },
            {
              sizeId: 3,
              discountType: 'percent',
              discountValue: 10,
              price: 100000,
              quantity: 10,
            },
          ]
        }
      },
    },
  }),
  client.product.create({
    data: {
      name: 'Shoes',
      description: faker.lorem.paragraph({ min: 2, max: 4 }),
      ProductRating: {
        createMany: {
          data: [
            {
              userId: 1,
              description: 'Brand new perfect masterpiece',
              rate: 5,
            },
            {
              userId: 2,
              description: 'This is very good',
              rate: 4,
            },
          ]
        }
      },
      ProductSize: {
        createMany: {
          data: [
            {
              sizeId: 3,
              price: 50000,
              quantity: 5,
            },
            {
              sizeId: 4,
              discountType: 'amount',
              discountValue: 20000,
              price: 50000,
              quantity: 5,
            },
            {
              sizeId: 5,
              discountType: 'percent',
              discountValue: 10,
              price: 100000,
              quantity: 10,
            },
          ]
        }
      },
    },
  }),
]);

(
  async () => {
    await seedSizes();
    await seedUsers();
    await seedProducts();
  }
)()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  })
  ;
