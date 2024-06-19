import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommissionCreateInput = {
  amount?: number | null;
  level?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
