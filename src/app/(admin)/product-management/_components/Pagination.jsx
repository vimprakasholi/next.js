import { getProductsCount } from "@/api/products";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ page, setPage }) => {
  const [pages, setPages] = useState([]);

  async function getCount() {
    const res = await getProductsCount();

    const totalItems = res.data;
    const totalPage = Math.ceil(totalItems / 3);
    const pageNumbers = [];

    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i.toString());

      setPages(pageNumbers);
    }
  }

  useEffect(() => {
    getCount();
  }, []);

  return (
    <nav
      className="flex flex-col items-start justify-end p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
      aria-label="Table navigation"
    >
      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            onClick={() => setPage(page ? 1 : page - 1)}
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FaAngleLeft className="w-5 h-5" />
          </button>
        </li>
        {pages.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => setPage(pageNumber)}
              className="flex items-center justify-center text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span
                className={
                  pageNumber == page
                    ? "bg-secondary text-white px-3 py-2"
                    : " px-3 py-2"
                }
              >
                {pageNumber}
              </span>
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => setPage(page > pages.length - 1 ? page : page + 1)}
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FaAngleRight className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
