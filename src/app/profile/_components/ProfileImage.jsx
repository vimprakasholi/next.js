import { updateProfileImage } from "@/api/users";
import Image from "next/image";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";

const ProfileImage = ({ user }) => {
  const [profileImage, setProfileImage] = useState(null);

  function updateImage() {
    const formdata = new FormData();

    formdata.append("image", profileImage);
    
    updateProfileImage(user._id, formdata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {user?.profileImageUrl ? (
        <Image
          src={user.profileImageUrl}
          height={64}
          width={64}
          alt={user.name}
          className="hover:bg-gray-50 h-16 w-16 rounded-full object-cover"
        />
      ) : (
        <FaUser className="rounded-full bg-gray-200 text-gray-700 h-16 w-16 p-3" />
      )}
      <input
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          setProfileImage(file);
        }}
      />
      <button onClick={updateImage}>Update Image</button>
    </div>
  );
};

export default ProfileImage;
