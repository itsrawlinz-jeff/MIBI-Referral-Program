import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReferralWhereInput = {
  id?: StringFilter;
  referee?: StringNullableFilter;
  referrer?: StringNullableFilter;
  status?: "Option1";
};
