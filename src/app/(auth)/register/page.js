"use client";
import { signup } from "@/api/auth";
import { EMAIL_REGEX } from "@/constants/regex";
import { HOME_ROUTE, LOGINT_ROUTE } from "@/constants/routes";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PasswordInput from "../_components/PasswordInput";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const router = useRouter();

  async function submitForm(data) {
    try {
      const response = await signup({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        confirmPassword: data.confirmPassword,
        address: {
          province: data.province,
          city: data.city,
        },
      });

      console.log(response);

      localStorage.setItem("authToken", response.data?.authToken);

      router.push(HOME_ROUTE);
    } catch (error) {
      toast.error(error.response.data);
    }
  }
  return (
    <div className="p-6 space-y-2 md:space-y-4 sm:p-8 dark:bg-slate-700 rounded-2xl">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Create an Account
      </h1>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kp Oli"
            {...register("name", {
              required: "Name is required",
            })}
          />
          <p className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="9883920929"
            {...register("phone", {
              required: "Phone is required",
            })}
          />
          <p className="text-red-600 text-sm mt-1">{errors.phone?.message}</p>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ghorahi"
            {...register("city", {
              required: "City is required",
            })}
          />
          <p className="text-red-600 text-sm mt-1">{errors.city?.message}</p>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
        </div>

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

        <button
          type="submit"
          className="w-full bg-primary/80 text-white hover:bg-primary transition font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
        >
          Register
        </button>
        <p className="text-sm font-light text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            href={LOGINT_ROUTE}
            className="font-medium text-primary hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
