import { CommissionListRelationFilter } from "../commission/CommissionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  commissions?: CommissionListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  level?: "Option1";
  referralCode?: StringNullableFilter;
  username?: StringFilter;
};
