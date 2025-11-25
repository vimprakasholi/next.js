import { updateProfileImage } from "@/api/users";
import Spinner from "@/components/Spinner";
import { updateUser } from "@/redux/auth/authSlice";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProfileImage = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();

  function updateImage(e) {
    e.preventDefault();

    setLoading(true);

    const formdata = new FormData();

    formdata.append("image", profileImage);

    updateProfileImage(user._id, formdata)
      .then((response) => {
        dispatch(updateUser(response.data.profileImageUrl));
      })
      .catch((error) => {
        toast.error(error.response?.data, { autoClose: 1500 });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      {user?.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          height={64}
          width={64}
          alt={user.name}
          className="hover:bg-gray-50 h-16 w-16 rounded-full object-cover border border-gray-200 p-1"
        />
      ) : (
        <FaUser className="rounded-full bg-gray-200 text-gray-700 h-16 w-16 p-3" />
      )}
      <form
        onSubmit={updateImage}
        className="flex flex-col md:flex-row items-start gap-2"
      >
        <input
          type="file"
          accept=".jpg,.png,.jpeg"
          className="border border-gray-400 px-3 py-2 rounded-md"
          required
          onChange={(e) => {
            const file = e.target.files[0];
            setProfileImage(file);
          }}
        />
        <button
          type="submit"
          className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-md"
        >
          Update Image
          {loading && <Spinner className="h-4 w-4 fill-primary" />}
        </button>
      </form>
    </div>
  );
};

export default ProfileImage;
