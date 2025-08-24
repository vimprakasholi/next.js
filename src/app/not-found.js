import { HOME_ROUTE } from "@/constants/routes";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <h2 className="text-8xl font-bold">
        4<span className="text-red-600 text-9xl">0</span>4
      </h2>
      <h1 className="text-4xl font-bold">Page Not found</h1>
      <Link className="text-blue-600 hover:underline font-medium" href={HOME_ROUTE}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
