"use client";

import { FaPlus, FaUser } from "react-icons/fa6";
import { HiOutlineUpload } from "react-icons/hi";
import { format } from "date-fns";
import { FaCog } from "react-icons/fa";
import Link from "next/link";
import { ORDER_MANAGEMENT_ROUTE } from "@/constants/routes";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/api/users";
import Action from "./Action";
import Image from "next/image";

const columns = [
  {
    label: "User",
    key: "user",
  },
  {
    label: "Email",
    key: "email",
  },
  {
    label: "Phone",
    key: "phone",
  },
  {
    label: "Roles",
    key: "roles",
  },
  {
    label: "Created At",
    key: "createdAt",
  },
];

const UsersTable = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg border border-gray-300 dark:border-gray-700">
      <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
        <div className="flex items-center flex-1 space-x-4">
          <h5>
            <span className="text-gray-500">All Users: </span>
            <span className="dark:text-white">{users.length}</span>
          </h5>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-600 uppercase font-medium bg-gray-50 dark:bg-gray-700 dark:text-gray-200">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4 py-3 cursor-pointer"
                >
                  <div className="flex items-centergap-2">{column.label}</div>
                </th>
              ))}
              <th
                scope="col"
                className="px-4 py-3 flex justify-center items-center"
              >
                <FaCog />
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-4 py-2 font-medium">
                    <div className="flex items-center gap-2">
                      {user.profileImageUrl ? (
                        <Image
                          src={user.profileImageUrl}
                          height={64}
                          width={64}
                          alt={user.name}
                          className="hover:bg-gray-50 h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <FaUser className="rounded-full bg-gray-200 h-10 w-10 p-2" />
                      )}
                      <h3>{user.name}</h3>
                    </div>
                  </td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">
                    {user.roles.map((role) => (
                      <span
                        key={role}
                        className="px-1 mx-0.5 bg-primary/10 text-primary text-xs border border-primary/50 rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </td>
                  <td className="px-4 py-2">
                    {format(new Date(user.createdAt), "dd MMM yyyy")}
                  </td>
                  <td className="px-4 py-2">
                    <Action id={user._id} userRoles={user.roles} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
