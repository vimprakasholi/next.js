import { updateOrder } from "@/api/orders";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { toast } from "react-toastify";

const CashOnDelivery = ({order}) => {
  const router = useRouter();

  function confirmOrder() {
    updateOrder(order._id, { status: ORDER_STATUS_CONFIRMED })
      .then(() => {
        toast.success("Order confirmed successfully", { autoClose: 1000 });
        router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`);
      })
      .catch((error) => toast.error(error.response?.data, { autoClose: 1000 }));
  }
  return (
    <button
      onClick={confirmOrder}
      className="px-4 py-1 rounded-md bg-green-700 hover:bg-green-600 text-sm cursor-pointer text-white flex items-center gap-2"
    >
      <LiaMoneyBillWaveSolid />
      Cash On Delivery
    </button>
  );
};

export default CashOnDelivery;
