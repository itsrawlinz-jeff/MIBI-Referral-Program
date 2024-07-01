import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  adminEmail?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  referee?: SortOrder;
  referrer?: SortOrder;
  siteLogo?: SortOrder;
  siteName?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
