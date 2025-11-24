import {
  DASHBOARD_ROUTE,
  LOGINT_ROUTE,
  PROFILE_ROUTE,
} from "@/constants/routes";
import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const UserPopup = ({ user, setShowPopup }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function logout() {
    dispatch(logoutUser());

    router.push(LOGINT_ROUTE);
  }
  return (
    <div
      className="absolute top-10 right-0"
      onClick={() => setShowPopup(false)}
    >
      <div className="fixed top-0 left-0 bg-black/10 z-10 w-full h-full"></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md min-w-44 p-4 flex flex-col items-start gap-1 z-50 relative">
        <div className="text-left">
          <h3 className="font-medium text-sm">{user.name}</h3>
          <p className="text-xs">{user.email}</p>
        </div>
        <div className="border-b border-gray-200 h-1 w-full"></div>
        <Link
          href={DASHBOARD_ROUTE}
          className="px-4 py-1 rounded-md bg-gray-100 dark:bg-gray-700 w-full text-left hover:bg-primary dark:hover:bg-primary hover:text-white"
        >
          Admin Panel
        </Link>
        <Link
          href={PROFILE_ROUTE}
          className="px-4 py-1 rounded-md bg-gray-100 dark:bg-gray-700 w-full text-left hover:bg-primary dark:hover:bg-primary hover:text-white"
        >
          Profile
        </Link>
        <div className="border-b border-gray-200 h-1 w-full"></div>
        <button
          onClick={logout}
          className="text-sm font-semibold w-full text-secondary border-secondary cursor-pointer border-2 hover:border-secondary rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserPopup;
