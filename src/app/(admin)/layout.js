"use client";
import Spinner from "@/components/Spinner";
import { HOME_ROUTE, LOGINT_ROUTE } from "@/constants/routes";
import { allowedAdminRoles } from "@/helpers/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const allowedRoles = allowedAdminRoles(user?.roles);
  const router = useRouter();

  useEffect(() => {
    if (!user) return router.push(LOGINT_ROUTE);

    if (!allowedRoles) router.push(HOME_ROUTE);
  });

  if (!user || !allowedRoles)
    return (
      <div className="flex justify-center py-24">
        <Spinner className="h-12 w-12 fill-primary" />
      </div>
    );

  return (
    <div>
      <h1>Admin Only</h1>
      {children}
    </div>
  );
};

export default AdminLayout;
