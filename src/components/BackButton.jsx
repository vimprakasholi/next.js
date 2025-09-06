"use client"
 
import { useRouter } from "next/navigation";
import React from "react";
import { PiArrowLeftThin } from "react-icons/pi";

const BackButton = () => {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <button onClick={goBack} className="flex items-center gap-2 py-2 cursor-pointer text-gray-700 dark:text-gray-300">
      <PiArrowLeftThin />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
