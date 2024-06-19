/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Commission } from "./Commission";
import { CommissionCountArgs } from "./CommissionCountArgs";
import { CommissionFindManyArgs } from "./CommissionFindManyArgs";
import { CommissionFindUniqueArgs } from "./CommissionFindUniqueArgs";
import { DeleteCommissionArgs } from "./DeleteCommissionArgs";
import { CommissionService } from "../commission.service";
@graphql.Resolver(() => Commission)
export class CommissionResolverBase {
  constructor(protected readonly service: CommissionService) {}

  async _commissionsMeta(
    @graphql.Args() args: CommissionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Commission])
  async commissions(
    @graphql.Args() args: CommissionFindManyArgs
  ): Promise<Commission[]> {
    return this.service.commissions(args);
  }

  @graphql.Query(() => Commission, { nullable: true })
  async commission(
    @graphql.Args() args: CommissionFindUniqueArgs
  ): Promise<Commission | null> {
    const result = await this.service.commission(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Commission)
  async deleteCommission(
    @graphql.Args() args: DeleteCommissionArgs
  ): Promise<Commission | null> {
    try {
      return await this.service.deleteCommission(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
