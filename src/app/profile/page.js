"use client";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Button";
import { EMAIL_REGEX } from "@/constants/regex";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { updateUserProfile } from "@/redux/auth/authActions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { resetSuccess } from "@/redux/auth/authSlice";
import ProfileImage from "./_components/ProfileImage";

const ProfilePage = () => {
  const { user, error, loading, success } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      city: user?.address?.city,
      province: user?.address?.province,
    },
  });

  const dispatch = useDispatch();

  async function submitForm(data) {
    dispatch(
      updateUserProfile({
        id: user._id,
        name: data.name,
        phone: data.phone,
        address: {
          province: data.province,
          city: data.city,
        },
      })
    );
  }

  useEffect(() => {
    if (error) toast.error(error, { autoClose: 1500 });

    if (success) {
      toast.success("Profile updated successfully", { autoClose: 1500 });
      dispatch(resetSuccess());
    }
  }, [error, success]);

  return (
    <section className="dark:bg-gray-800">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <h1 className="text-3xl mb-5 font-semibold text-gray-800 dark:text-white">
          Your Profile
        </h1>
        <div className="p-6 space-y-2 md:space-y-4 sm:p-8 dark:bg-slate-700 rounded-2xl w-full border border-gray-200 dark:border-gray-600 shadow-lg">
          <ProfileImage user={user} />
          <form
            className="space-y-2 md:space-y-4"
            onSubmit={handleSubmit(submitForm)}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="name"
                id="name"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kp Oli"
                {...register("name", {
                  required: "Name is required",
                })}
              />
              <p className="text-red-600 text-sm mt-1">
                {errors.name?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9883920929"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              <p className="text-red-600 text-sm mt-1">
                {errors.phone?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address city
              </label>
              <input
                type="text"
                id="city"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ghorahi"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <p className="text-red-600 text-sm mt-1">
                {errors.city?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="province"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address province
              </label>
              <select
                name="province"
                id="province"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                {...register("province", {
                  required: "Province is required",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select province
                </option>
                <option value="Koshi">Koshi</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpaschim">Sudurpaschim</option>
              </select>
              <p className="text-red-600 text-sm mt-1">
                {errors.province?.message}
              </p>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="disabled:bg-gray-100 disabled:text-gray-600 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                disabled
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Invalid email address",
                  },
                })}
              />
              <p className="text-red-600 text-sm mt-1">
                {errors.email?.message}
              </p>
            </div>
            <Button loading={loading} label="Update user" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
