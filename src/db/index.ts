import { PrismaClient } from "@prisma/client";

/*
 * We will check globalThis to see if anything is stored on it.
 * If nothing is on the object, we will create a new PrismaClient;
 * otherwise, we will just reuse the one stored
 * to avoid this error:
 * >(prisma-client) There are already 10 instances of Prisma Client actively running.
 */

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export const db = prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
