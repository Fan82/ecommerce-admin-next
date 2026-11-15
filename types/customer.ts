export type Region = "TW" | "KR" | "JP" | "SEA";
export type Customer = {
  id: number;
  name: string;
  email: string;
  region: Region;
  createdAt: string;
};
