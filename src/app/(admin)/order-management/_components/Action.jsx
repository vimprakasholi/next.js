"use client";

import { updateOrder } from "@/api/orders";
import Modal from "@/components/Modal";
import { useState } from "react";
import { BsBox2 } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { toast } from "react-toastify";

const Action = ({ id, orderStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(orderStatus);

  function updateOrderStatus() {
    updateOrder(id, { status })
      .then(() =>
        toast.success(`Status updated: ${status}`, { autoClose: 1500 })
      )
      .catch((error) =>
        toast.error("Status update failed", { autoClose: 1500 })
      )
      .finally(() => setShowModal(false));
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => setShowModal(true)}
        className="text-blue-700 cursor-pointer"
      >
        <FaPencil />
      </button>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        label="Update order status"
        info={
          <div className="pb-5">
            <select
              onChange={(e) => setStatus(e.target.value)}
              className="px-8 py-1 rounded-md border border-gray-300"
              defaultValue={orderStatus}
            >
              <option value="PENDING">PENDING</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
        }
        confirmAction={
          <button
            onClick={updateOrderStatus}
            className="bg-green-700 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
        icon={<BsBox2 className="text-6xl mx-auto text-gray-400 mb-5" />}
      />
    </div>
  );
};

export default Action;
