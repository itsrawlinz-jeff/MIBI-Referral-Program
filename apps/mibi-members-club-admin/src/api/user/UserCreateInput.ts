import { CommissionCreateNestedManyWithoutUsersInput } from "./CommissionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  commissions?: CommissionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  isActive?: boolean | null;
  lastName?: string | null;
  level?: "Option1" | null;
  password: string;
  referralCode?: string | null;
  roles: InputJsonValue;
  username: string;
};
