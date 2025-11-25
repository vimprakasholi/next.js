"use client";

import { LOGIN_ROUTE, LOGINT_ROUTE } from "@/constants/routes";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import PasswordInput from "../_components/PasswordInput";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/api/auth";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const token = searchParams.get("resetToken");
  const userId = searchParams.get("userId");

  function submitForm(data) {
    setLoading(true);

    resetPassword(token, userId, data)
      .then(() => {
        toast.success("Password reset successful.", {
          autoClose: 1500,
        });

        reset();
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          autoClose: 1500,
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 dark:bg-slate-700 rounded-2xl">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Reset password?
      </h1>
      <form
        className="space-y-4 md:space-y-6"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <PasswordInput
            id="password"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be 8 characters long.",
              },
            })}
          />
          <p className="text-red-600 text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm Password
          </label>
          <PasswordInput
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm password is required.",
              minLength: {
                value: 8,
                message: "Password must be 8 characters long.",
              },
              validate: (value) => {
                if (value !== password) return "Passwords do not match.";
              },
            })}
          />
          <p className="text-red-600 text-sm mt-1">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <Button loading={loading} label="Submit" />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Please login to continue?{" "}
          <Link
            href={LOGINT_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
