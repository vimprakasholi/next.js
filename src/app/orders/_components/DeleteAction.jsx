"use client";

import { deleteOrder } from "@/api/orders";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { toast } from "react-toastify";

const DeleteAction = ({ order, setIsUpdated }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  function removeOrder() {
    deleteOrder(order._id)
      .then(() => {
        toast.success("Order deleted successfully", { autoClose: 1000 });
        router.refresh();
        setIsUpdated(true);
      })
      .catch(() => toast.error(error.response?.data, { autoClose: 1000 }))
      .finally(() => setShowModal(false));
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md cursor-pointer"
      >
        Delete
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label="Are you sure you want to delete this order?"
        confirmAction={
          <button
            onClick={removeOrder}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-red-600 rounded-lg border border-gray-200 hover:bg-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Yes, I&apos;m sure.
          </button>
        }
        info={
          <p className="mb-5">
            <span className="font-medium">Order Number: </span>
            {order.orderNumber}
          </p>
        }
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-600 w-12 h-12" />}
      />
    </>
  );
};

export default DeleteAction;
