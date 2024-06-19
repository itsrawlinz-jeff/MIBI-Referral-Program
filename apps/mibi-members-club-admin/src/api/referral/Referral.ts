import { JsonValue } from "type-fest";

export type Referral = {
  adminEmail: string | null;
  createdAt: Date;
  id: string;
  referee: string | null;
  referrer: string | null;
  siteLogo: JsonValue;
  siteName: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
