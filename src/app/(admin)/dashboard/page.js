"use client";

import { useEffect, useState } from "react";
import Card from "./_components/Card";
import { FaCertificate, FaRegClock, FaVanShuttle } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { getOrders } from "@/api/orders";
import {
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "@/constants/orderStatus";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => toast.error(error.message, { autoClose: 1500 }));
  }, []);
  return (
    <div className="px-4 mx-auto max-w-screen-2xl">
      <h2 className="text-gray-800 dark:text-white mb-5 text-2xl font-semibold">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card
          label="Pending"
          icon={<FaRegClock className="text-4xl text-red-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_PENDING)
              .length
          }
        />
        <Card
          label="Confirmed"
          icon={<FaRegCheckCircle className="text-4xl text-blue-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_CONFIRMED)
              .length
          }
        />
        <Card
          label="Shipped"
          icon={<FaVanShuttle className="text-4xl text-yellow-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_SHIPPED)
              .length
          }
        />
        <Card
          label="Delivered"
          icon={<FaCertificate className="text-4xl text-green-600" />}
          value={
            orders.filter((order) => order.status === ORDER_STATUS_DELIVERED)
              .length
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
