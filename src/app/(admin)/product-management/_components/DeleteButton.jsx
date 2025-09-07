import { deleteProduct } from "@/api/products";
import Modal from "@/components/Modal";
import { refreshList } from "@/redux/product/productSlice";
import React, { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const DeleteProductButton = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  function confirmDelete() {
    deleteProduct(id)
      .then(() => {
        dispatch(refreshList(true));

        toast.success("Product deleted successfully", { autoClose: 1500 });
      })
      .catch((error) => toast.error(error.response?.data, { autoClose: 1500 }))
      .finally(() => setShowModal(false));
  }

  return (
    <>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="text-red-600 cursor-pointer"
      >
        <FaTrashCan />
      </button>

      <Modal
        icon={<FiAlertCircle className="mx-auto mb-4 text-red-600 w-12 h-12" />}
        label="Are you sure you want to delete this product?"
        confirmAction={
          <button
            onClick={confirmDelete}
            className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center cursor-pointer"
          >
            Yes, I'm sure
          </button>
        }
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default DeleteProductButton;
