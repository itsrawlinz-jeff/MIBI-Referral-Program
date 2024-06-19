import { CommissionUpdateManyWithoutUsersInput } from "./CommissionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  commissions?: CommissionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  level?: "Option1" | null;
  password?: string;
  referralCode?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
