"use client";

import OrdersTable from "./_components/Table";

const OrdersManagementPage = () => {
  return (
      <div className="px-4 mx-auto max-w-screen-2xl">
        <h2 className="text-gray-800 dark:text-white mb-5 text-2xl font-semibold">
          Order Management
        </h2>
        <OrdersTable />
      </div>
  );
};

export default OrdersManagementPage;
