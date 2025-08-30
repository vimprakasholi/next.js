"use client";
import Logo from "@/components/Logo";
import { HOME_ROUTE } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(HOME_ROUTE);
      user.message = "You're already logged in";
    }
  }, [user, router]);

  return (
    <section className="flex md:items-center justify-center py-12 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-3xl flex flex-col items-center">
            <Logo className="text-4xl pb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white dark:bg-slate-700 rounded-2xl shadow-md w-full">
              <div className="hidden md:flex bg-gradient-to-b from-primary to-secondary h-full rounded-l-2xl items-center justify-center">
                <div className="text-center px-6">
                  <h1 className="text-4xl text-white font-semibold mb-5">
                    Welcome!
                  </h1>
                  <p className="text-white text-md font-medium">
                    Great news! Your favourite item is back in stock. Don't miss
                    out, order now before it sells out again!
                  </p>
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
