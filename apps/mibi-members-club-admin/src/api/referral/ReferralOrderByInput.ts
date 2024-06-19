import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  referee?: SortOrder;
  referrer?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
