import { confirmPayment, payViaStripe } from "@/api/orders";
import Modal from "@/components/Modal";
import config from "@/config";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCreditCard } from "react-icons/fa6";
import { toast } from "react-toastify";

const stripePromise = loadStripe(config.stripeKey);

const CheckoutForm = ({ order }) => {
  const [showModal, setShowModal] = useState(false);
  const stripe = useStripe();
  const element = useElements();

  const router = useRouter();

  async function initPayment() {
    try {
      const response = await payViaStripe(order._id);
      const clientSecret = response.data?.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      });

      if (result && result.paymentIntent.status == "succeeded") {
        await confirmPayment(order._id, { status: "completed" }).then(() =>
          toast.success("Payment success", {
            autoClose: 2500,
            onClose: () =>
              router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`),
          })
        );
      }
    } catch (error) {
      toast.error("Payment failed", { autoClose: 2500 });
    } finally {
      setShowModal(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-white bg-[#0E3359] hover:bg-[#0e3359e5] cursor-pointer flex items-center px-4 py-1 rounded-md text-sm"
      >
        Card Payment
      </button>
      <form>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          label={"Card Payment"}
          info={
            <div className="mt-5 mb-10 border border-gray-300 dark:bg-gray-300 rounded-md p-1">
              <CardElement />
            </div>
          }
          icon={
            <FaCreditCard className="mx-auto mb-4 text-primary w-12 h-12" />
          }
          confirmAction={
            <button
              onClick={initPayment}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Pay
            </button>
          }
        />
      </form>
    </>
  );
};

const PayViaStripe = ({ order }) => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutForm order={order} />
      </Elements>
    </>
  );
};

export default PayViaStripe;
