"use client";

import { updateUserRoles } from "@/api/users";
import Modal from "@/components/Modal";
import { useState } from "react";
import { FaPencil, FaRegCircleUser } from "react-icons/fa6";
import { toast } from "react-toastify";

const Action = ({ id, userRoles }) => {
  const [showModal, setShowModal] = useState(false);
  const [roles, setRoles] = useState(userRoles);

  function handleRoleChange(role) {
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  }

  function update() {
    updateUserRoles(id, { roles })
      .then(() => toast.success(`Status updated succeed`, { autoClose: 1500 }))
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
        label="Update user roles"
        info={
          <div className="pb-5 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="admin"
                onClick={() => handleRoleChange("ADMIN")}
                defaultChecked={roles.includes("ADMIN")}
              />
              <label htmlFor="admin">ADMIN</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="merchant"
                onClick={() => handleRoleChange("MERCHANT")}
                defaultChecked={roles.includes("MERCHANT")}
              />
              <label htmlFor="merchant">MERCHANT</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="user"
                onClick={() => handleRoleChange("USER")}
                defaultChecked={roles.includes("USER")}
                disabled
              />
              <label htmlFor="user">USER</label>
            </div>
          </div>
        }
        confirmAction={
          <button
            onClick={update}
            className="bg-green-700 text-white rounded-md px-6 py-2 cursor-pointer hover:bg-green-800"
          >
            Update
          </button>
        }
        icon={
          <FaRegCircleUser className="text-6xl mx-auto text-gray-400 mb-5" />
        }
      />
    </div>
  );
};

export default Action;
