import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommissionUpdateInput = {
  amount?: number | null;
  level?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
