"use client";

import { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import FilterDrawer from "./FilterDrawer";

const FilterButton = ({ brands, categories }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="bg-primary hover:bg-primary/90 text-white px-4 py-1 rounded-md flex items-center gap-1"
      >
        Filter <MdOutlineFilterAlt />
      </button>
      {showFilter && (
        <FilterDrawer
          showFilter={showFilter}
          setShowfilter={setShowFilter}
          brands={brands}
          categories={categories}
        />
      )}
    </>
  );
};

export default FilterButton;
