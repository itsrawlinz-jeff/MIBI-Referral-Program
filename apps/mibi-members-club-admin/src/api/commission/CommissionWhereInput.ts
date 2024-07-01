import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommissionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  level?: IntNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
