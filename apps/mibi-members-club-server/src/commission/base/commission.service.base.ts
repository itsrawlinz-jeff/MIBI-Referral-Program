/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Commission as PrismaCommission,
  User as PrismaUser,
} from "@prisma/client";

export class CommissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CommissionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.commission.count(args);
  }

  async commissions(
    args: Prisma.CommissionFindManyArgs
  ): Promise<PrismaCommission[]> {
    return this.prisma.commission.findMany(args);
  }
  async commission(
    args: Prisma.CommissionFindUniqueArgs
  ): Promise<PrismaCommission | null> {
    return this.prisma.commission.findUnique(args);
  }
  async createCommission(
    args: Prisma.CommissionCreateArgs
  ): Promise<PrismaCommission> {
    return this.prisma.commission.create(args);
  }
  async updateCommission(
    args: Prisma.CommissionUpdateArgs
  ): Promise<PrismaCommission> {
    return this.prisma.commission.update(args);
  }
  async deleteCommission(
    args: Prisma.CommissionDeleteArgs
  ): Promise<PrismaCommission> {
    return this.prisma.commission.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.commission
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
