import { InputJsonValue } from "../../types";

export type ReferralCreateInput = {
  adminEmail?: string | null;
  referee?: string | null;
  referrer?: string | null;
  siteLogo?: InputJsonValue;
  siteName?: string | null;
  status?: "Option1" | null;
};
