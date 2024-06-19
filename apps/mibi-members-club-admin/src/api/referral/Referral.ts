export type Referral = {
  createdAt: Date;
  id: string;
  referee: string | null;
  referrer: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
