export type Gap = {
  id: number;
  topic: string;
  evidence: string;
  severity: 1 | 2 | 3;
};

export const GAPS: Gap[] = [
  {
    id: 1,
    topic: "key 與 map",
    evidence: "Day 92 第 1 題 li 沒有 key",
    severity: 2,
  },
  {
    id: 2,
    topic: "async 與 await",
    evidence: "Day 92 第 1 題沒有 await getProducts",
    severity: 3,
  },
  {
    id: 3,
    topic: "page.tsx 檔名",
    evidence: "Day 92 第 5 題檔名沒改",
    severity: 2,
  },
  {
    id: 4,
    topic: "Server 與 Client 邊界",
    evidence: "Day 92 B3 usePathname",
    severity: 3,
  },
  {
    id: 5,
    topic: "元件與狀態管理",
    evidence: "ProductForm 的 state 要放哪",
    severity: 2,
  },
  {
    id: 6,
    topic: "key 與 map",
    evidence: "Day 92 第 5 題又漏 key",
    severity: 1,
  },
];
