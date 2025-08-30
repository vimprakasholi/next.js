"use client";
import { LOGINT_ROUTE } from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  function logout() {
    dispatch(logoutUser());

    router.push(LOGINT_ROUTE);
  }

  if (user)
    return (
      <button
        className="text-sm cursor-pointer font-semibold text-secondary border-secondary border-2 hover:border-secondary rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
        onClick={logout}
      >
        Logout
      </button>
    );

  return (
    <Link
      href={LOGINT_ROUTE}
      className="text-sm font-semibold text-secondary border-secondary border-2 hover:border-secondary rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
    >
      Login
    </Link>
  );
};

export default AuthMenu;
