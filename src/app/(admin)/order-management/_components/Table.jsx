"use client";

import { FaPlus } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import { format } from "date-fns";
import { FaCog } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import { ORDER_MANAGEMENT_ROUTE } from "@/constants/routes";
import { useEffect, useState } from "react";
import { getOrders } from "@/api/orders";
import {
  HiArrowSmallDown,
  HiArrowSmallUp,
  HiMiniArrowsUpDown,
} from "react-icons/hi2";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import Action from "./Action";

const columns = [
  {
    label: "S.No.",
    key: "id",
    sortable: false,
  },
  {
    label: "Order Number",
    key: "orderNumber",
    sortable: true,
  },
  {
    label: "OrderBy",
    key: "user",
    sortable: true,
  },
  {
    label: "Order Items",
    key: "orderItems",
    sortable: true,
  },
  {
    label: "Total Price",
    key: "totalPrice",
    sortable: true,
  },
  {
    label: "status",
    key: "status",
    sortable: true,
  },
  {
    label: "Created At",
    key: "createdAt",
    sortable: true,
  },
];

const OrdersTable = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  useEffect(() => {
    getOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg border border-gray-300 dark:border-gray-700">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Orders: </span>
            <span className="dark:text-white">{orders.length}</span>
          </h5>
          <h5>
            <span className="text-gray-500">Total sales: </span>
            <span className="dark:text-white">
              Rs.
              {orders?.reduce((acc, order) => acc + order.totalPrice, 0) / 1000}
              K
            </span>
          </h5>
        </div>
        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
          <Link
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary/80 hover:bg-primary"
            href={`${ORDER_MANAGEMENT_ROUTE}`}
          >
            <FaPlus className="h-3.5 w-3.5 mr-2" />
            Add new order
          </Link>
          <button
            type="button"
            className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <HiOutlineUpload className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-600 uppercase font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-3 cursor-pointer"
                  onClick={() => {
                    if (!column.sortable) return;
                    setSortBy(column.key);
                    setSortOrder(sortOrder == 1 ? -1 : 1);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable ? (
                      column.key == sortBy ? (
                        sortOrder == 1 ? (
                          <HiArrowSmallUp />
                        ) : (
                          <HiArrowSmallDown />
                        )
                      ) : (
                        <HiMiniArrowsUpDown />
                      )
                    ) : null}
                  </div>
                </th>
              ))}
              <th
                scope="col"
                className="px-4 py-3 flex justify-center items-center"
              >
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-2 font-medium text-gray-600 whitespace-nowrap dark:text-gray-300">
                    <div className="flex items-center">{index + 1}.</div>
                  </td>
                  <td
                    scope="row"
                    className="flex items-center px-4 py-2 font-medium whitespace-nowrap"
                  >
                    {order.orderNumber}
                  </td>
                  <td className="px-4 py-2">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {order.user.name}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap ">
                    <ul>
                      {order.orderItems?.map((item, index) => (
                        <li className="flex items-center" key={index}>
                          <RxDotFilled />
                          <span className="text-md font-medium px-1">
                            {item.product.name}
                          </span>
                          ({item.quantity})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap">
                    Rs.{order.totalPrice}
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap ">
                    <div className="flex items-center">
                      {order.status == ORDER_STATUS_DELIVERED && (
                        <div className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full" />
                      )}
                      {order.status == ORDER_STATUS_SHIPPED && (
                        <div className="inline-block w-4 h-4 mr-2 bg-yellow-500 rounded-full" />
                      )}
                      {order.status == ORDER_STATUS_CONFIRMED && (
                        <div className="inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full" />
                      )}
                      {order.status == ORDER_STATUS_PENDING && (
                        <div className="inline-block w-4 h-4 mr-2 bg-red-500 rounded-full" />
                      )}
                      <span className="text-xs">{order.status}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap">
                    {format(new Date(order.createdAt), "dd MMM yyyy")}
                  </td>
                  <td className="px-4 py-2 font-medium whitespace-nowrap">
                    <Action id={order._id} orderStatus={order.status} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
