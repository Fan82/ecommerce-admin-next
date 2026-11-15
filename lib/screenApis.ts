export type ScreenApi = {
  route: string;
  apis: string[];
};

export const SCREEN_APIS: ScreenApi[] = [
  {
    route: "/dashboard/orders",
    apis: ["fetchOrders"],
  },
  {
    route: "/dashboard/orders/[id]",
    apis: ["fetchOrderById", "fetchCustomerById", "updateOrderStatus"],
  },
  {
    route: "/dashboard/customers",
    apis: ["fetchCustomers"],
  },
  {
    route: "/dashboard/customers/[id]",
    apis: ["fetchCustomerById", "fetchOrdersByCustomer"],
  },
];
