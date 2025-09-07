"use client";

import { GRID_VIEW } from "@/constants/productView";
import { toggleProductView } from "@/redux/userPreferences/userPreferenceSlice";
import { MdOutlineFormatListBulleted, MdOutlineGridView } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ListGridView = () => {
  const dispatch = useDispatch();
  const { productView } = useSelector((state) => state.userPreferences);
  return (
    <button
      className="bg-gray-200 dark:bg-gray-600 dark:text-white rounded p-2"
      onClick={() => dispatch(toggleProductView())}
    >
      {productView == GRID_VIEW ? (
        <MdOutlineFormatListBulleted className="w-5 h-5" />
      ) : (
        <MdOutlineGridView className="w-5 h-5" />
      )}
    </button>
  );
};

export default ListGridView;
