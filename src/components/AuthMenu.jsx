"use client";
import { LOGINT_ROUTE } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import UserPopup from "./UserPopup";
import { useSelector } from "react-redux";
import { useState } from "react";

const AuthMenu = () => {
  const { user } = useSelector((state) => state.auth);
  const [showPopup, setShowPopup] = useState(false);

  if (user)
    return (
      <div className="relative">
        <button onClick={() => setShowPopup(true)} className="ml-2 cursor-pointer">
          {user.profileImageUrl ? (
            <Image
              src={user.profileImageUrl}
              height={64}
              width={64}
              alt={user.name}
              className="hover:bg-gray-50 h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <FaUser className="rounded-full bg-gray-200 text-gray-700 h-8 w-8 p-1" />
          )}
        </button>
        {showPopup && <UserPopup user={user} setShowPopup={setShowPopup} />}
      </div>
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
