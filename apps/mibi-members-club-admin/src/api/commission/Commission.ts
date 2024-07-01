import { User } from "../user/User";

export type Commission = {
  amount: number | null;
  createdAt: Date;
  id: string;
  level: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
