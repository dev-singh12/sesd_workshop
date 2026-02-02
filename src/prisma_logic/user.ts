import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base";

const prisma = new PrismaClient();
type User = typeof prisma.user extends { findUnique: (...args: any) => Promise<infer U> } ? U : never;

class UserRepository extends BaseRepository<User> {
  constructor() {
    super("user");
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findUnique({
      where: { email },
    });
  }
}

export const userRepository = new UserRepository();

