"use client";

import {
  DASHBOARD_ROUTE,
  ORDER_MANAGEMENT_ROUTE,
  PRODUCT_MANAGEMENT_ROUTE,
  USER_MANAGEMENT_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const amdinMenu = [
  { route: DASHBOARD_ROUTE, label: "Dashboard" },
  { route: PRODUCT_MANAGEMENT_ROUTE, label: "Product Management" },
  { route: ORDER_MANAGEMENT_ROUTE, label: "Order Management" },
  { route: USER_MANAGEMENT_ROUTE, label: "User Management" },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white hidden lg:block w-64 h-full z-20 absolute top-0 left-0 border-r border-gray-300 dark:border-gray-700 dark:bg-gray-800">
      <div className="px-2 py-4 flex flex-col gap-1">
        {amdinMenu.map((menu) => {
          const isActive = pathname === menu.route;

          return (
            <Link
              key={menu.route}
              className={`bg-primary px-3 py-1 rounded-md ${
                isActive
                  ? "text-white bg-primary"
                  : "text-gray-700 bg-primary/5 dark:bg-gray-700 dark:text-white"
              }`}
              href={menu.route}
            >
              {menu.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
