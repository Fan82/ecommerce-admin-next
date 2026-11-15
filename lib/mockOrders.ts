import type { Order } from "@/types/order";

export const mockOrders: Order[] = [
  {
    id: 1001,
    customerId: 1,
    status: "pending",
    createdAt: "2026-11-01",
    items: [
      {
        productId: 1,
        productName: "Leather Tote",
        unitPrice: 48000,
        quantity: 1,
      },
    ],
  },
  {
    id: 1002,
    customerId: 2,
    status: "paid",
    createdAt: "2026-11-03",
    items: [
      { productId: 2, productName: "Silk Scarf", unitPrice: 9800, quantity: 2 },
      {
        productId: 3,
        productName: "Card Holder",
        unitPrice: 12500,
        quantity: 1,
      },
    ],
  },
  {
    id: 1003,
    customerId: 1,
    status: "shipped",
    createdAt: "2026-11-05",
    items: [
      {
        productId: 3,
        productName: "Card Holder",
        unitPrice: 12500,
        quantity: 1,
      },
    ],
  },
  {
    id: 1004,
    customerId: 3,
    status: "cancelled",
    createdAt: "2026-11-06",
    items: [
      {
        productId: 1,
        productName: "Leather Tote",
        unitPrice: 48000,
        quantity: 1,
      },
    ],
  },
];
