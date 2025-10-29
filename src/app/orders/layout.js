"use client";

import { LOGINT_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ProductsLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  if (!user) router.push(LOGINT_ROUTE);

  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-6 pb-16">
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
};

export default ProductsLayout;
