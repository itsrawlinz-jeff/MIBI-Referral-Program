import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "referee";

export const ReferralTitle = (record: TReferral): string => {
  return record.referee?.toString() || String(record.id);
};
