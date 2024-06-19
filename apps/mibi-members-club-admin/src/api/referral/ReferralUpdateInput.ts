import { InputJsonValue } from "../../types";

export type ReferralUpdateInput = {
  adminEmail?: string | null;
  referee?: string | null;
  referrer?: string | null;
  siteLogo?: InputJsonValue;
  siteName?: string | null;
  status?: "Option1" | null;
};
