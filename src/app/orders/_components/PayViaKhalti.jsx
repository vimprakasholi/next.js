
import { payViaKhalti } from "@/api/orders";
import khalti from "@/assets/images/payments/khalti.jpg";
import Image from "next/image";
import { toast } from "react-toastify";

const PayViaKhalti = ({ order }) => {
  function initOrderPayment() {
    payViaKhalti(order._id)
      .then((response) => (window.location.href = response.data.payment_url))
      .catch((error) => toast.error(error.response.data, { autoClose: 1000 }));
  }
  return (
    <button
      onClick={initOrderPayment}
      className="text-white bg-[#50207a] hover:bg-[#281c33e7] cursor-pointer flex items-center pr-4 pl-2 py-1 rounded-md text-sm"
    >
      <Image
        src={khalti}
        height={30}
        width={30}
        alt=""
        className="h-5 w-auto"
      />
      Khalti
    </button>
  );
};

export default PayViaKhalti;
