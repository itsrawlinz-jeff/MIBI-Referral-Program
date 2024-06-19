import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "siteName";

export const ReferralTitle = (record: TReferral): string => {
  return record.siteName?.toString() || String(record.id);
};
