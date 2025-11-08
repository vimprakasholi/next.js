"use client";

import { confirmPayment } from "@/api/orders";
import Spinner from "@/components/Spinner";
import { ORDER_STATUS_CONFIRMED } from "@/constants/orderStatus";
import { ORDERS_ROUTE } from "@/constants/routes";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

const KhaltiPaymentPage = () => {
  const searchParams = useSearchParams();
  const status = searchParams?.get("status");
  const params = useParams();

  const router = useRouter();

  useEffect(() => {
    confirmPayment(params.id, { status })
      .then(() =>
        toast.success("Payment success", {
          autoClose: 2500,
          onClose: () =>
            router.push(`${ORDERS_ROUTE}?status=${ORDER_STATUS_CONFIRMED}`),
        })
      )
      .catch(() =>
        toast.error("Payment failed", {
          autoClose: 2500,
          onClose: () => router.push(ORDERS_ROUTE),
        })
      );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <Spinner className="h-12 w-12 fill-primary" />
      <h2 className="mt-5 text-3xl">Verifying paymnet...</h2>
    </div>
  );
};

export default KhaltiPaymentPage;
