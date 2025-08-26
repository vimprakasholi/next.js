import Logo from "@/components/Logo";
import config from "@/config";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <section className="flex md:items-center justify-center py-20 bg-slate-100 h-screen">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-col items-center justify-center">
          <Logo className="text-4xl pb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl shadow-md max-w-2xl lg:w-1/2">
            <div className="hidden md:flex bg-gradient-to-b from-primary to-secondary h-full rounded-l-2xl items-center justify-center">
              <div className="text-center px-8">
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
    </section>
  );
};

export default AuthLayout;
