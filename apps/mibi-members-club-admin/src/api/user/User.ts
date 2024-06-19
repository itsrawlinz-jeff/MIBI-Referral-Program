import { Commission } from "../commission/Commission";
import { JsonValue } from "type-fest";

export type User = {
  commissions?: Array<Commission>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isActive: boolean | null;
  lastName: string | null;
  level?: "Option1" | null;
  referralCode: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
