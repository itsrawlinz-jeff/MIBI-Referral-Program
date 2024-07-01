import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReferralWhereInput = {
  adminEmail?: StringNullableFilter;
  id?: StringFilter;
  referee?: StringNullableFilter;
  referrer?: StringNullableFilter;
  siteLogo?: JsonFilter;
  siteName?: StringNullableFilter;
  status?: "Option1";
};
