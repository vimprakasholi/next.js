"use client";

import {
  DEFAULT_BRAND_FILTER,
  DEFAULT_CATEGORY_FILTER,
  DEFAULT_LIMIT,
  DEFAULT_MAX,
  DEFAULT_MIN,
  DEFAULT_SORT,
} from "@/constants/filterDefaults";
import { PRODUCTS_ROUTE } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FilterDrawer = ({ showFilter, setShowfilter, brands, categories }) => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [sort, setSort] = useState(DEFAULT_SORT);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX);
  const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRAND_FILTER);
  const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY_FILTER);

  const router = useRouter();
  const searchParams = useSearchParams();

  function setFilter() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("limit", limit);
    params.set("sort", sort);
    params.set("min", minPrice < 0 ? 0 : minPrice);
    params.set("max", maxPrice);
    params.set("category", categoryFilter);
    params.set("brands", brandsFilter);

    router.push(`?${params.toString()}`);

    setShowfilter(false);
  }

  function resetFilter() {
    setLimit(DEFAULT_LIMIT);
    setSort(DEFAULT_SORT);
    setMinPrice(DEFAULT_MIN);
    setMaxPrice(DEFAULT_MAX);
    setBrandsFilter(DEFAULT_BRAND_FILTER);
    setCategoryFilter(DEFAULT_CATEGORY_FILTER);

    router.push(PRODUCTS_ROUTE);

    setShowfilter(false);
  }

  function handleBrandsFilterChange(brand) {
    setBrandsFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...prev, brand]
    );
  }

  return (
    <div className={showFilter ? "block absolute" : "hidden"}>
      <div
        className="min-h-screen w-full fixed top-0 left-0 z-10 bg-black dark:bg-slate-900 opacity-20"
        onClick={() => setShowfilter(false)}
      ></div>
      <div className="overflow-y-auto fixed top-14 left-0 z-20 pt-8 pb-16 px-4 h-screen min-w-48 shadow bg-white dark:bg-slate-900">
        <h4 className="text-2xl md:text-3xl font-medium mb-2 dark:text-white">
          Filter Products
        </h4>
        <div className="py-2">
          <label
            htmlFor="limit"
            className="block mb-2 text-sm text-gray-500 font-semibold uppercase dark:text-gray-300"
          >
            Limit
          </label>
          <select
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
            id="limit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="py-2">
          <label
            htmlFor="orderBy"
            className="block mb-2 text-sm text-gray-500 font-semibold uppercase dark:text-gray-300"
          >
            Order By
          </label>
          <select
            onChange={(e) => setSort(e.target.value)}
            id="orderBy"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
            <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
            <option value={JSON.stringify({ price: 1 })}>
              Price: low to high
            </option>
            <option value={JSON.stringify({ price: -1 })}>
              Price: high to low
            </option>
            <option value={JSON.stringify({ name: 1 })}>Price: A-Z</option>
            <option value={JSON.stringify({ name: -1 })}>Price: Z-A</option>
          </select>
        </div>
        <div className="py-2">
          <label
            htmlFor="orderBy"
            className="block mb-2 text-sm text-gray-500 font-semibold uppercase dark:text-gray-300"
          >
            Price Range
          </label>
          <label
            htmlFor="min"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Minimum Price
          </label>
          <input
            onChange={(e) => setMinPrice(e.target.value)}
            type="number"
            id="min"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2"
            placeholder={10}
          />
          <label
            htmlFor="max"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Maximum Price
          </label>
          <input
            onChange={(e) => setMaxPrice(e.target.value)}
            type="number"
            id="max"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder={10000}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="category"
            className="block mb-2 text-sm text-gray-500 font-semibold uppercase dark:text-gray-300"
          >
            Category Filter
          </label>
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            id="category"
            defaultValue=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="" disabled>
              Select Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="py-2">
          <label
            htmlFor="brands"
            className="block mb-2 text-sm text-gray-500 font-semibold uppercase dark:text-gray-300"
          >
            Brands Filter
          </label>
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center gap-2 mb-1 ml-2">
              <input
                onChange={() => handleBrandsFilterChange(brand)}
                id={brand}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={brand}
                className="w-ful text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="py-2">
          <button
            onClick={() => setFilter()}
            type="button"
            className="text-white bg-primary/90 hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-primary/80 dark:hover:bg-primary/90"
          >
            Apply filters
          </button>
          <button
            onClick={() => resetFilter()}
            type="button"
            className="text-white bg-secondary/90 hover:bg-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-secondary/80 dark:hover:bg-secondary/90"
          >
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
