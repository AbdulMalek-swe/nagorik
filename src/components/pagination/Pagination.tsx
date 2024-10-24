import React from "react";
import { returnPagination } from "./returnPagination";

const Pagination = ({
  totalPage,
  page,
  handleChange,
  activePage,
}: {
  totalPage: number;
  page: number;
  handleChange: (page: number | string) => void;
  activePage: number;
}) => {
  const arr = returnPagination(totalPage, page, 1);
  return (
    <div className="flex justify-center my-4">
      <div>
        <ul className="flex items-center gap-6   p-4 rounded-lg shadow-md">
          {/* Previous Button */}
          <li
            onClick={() => {
              const prevPage = page > 1 ? page - 1 : 1;
              console.log(prevPage);
              handleChange(prevPage);
            }}
            className="cursor-pointer border border-white hover:bg-violet-700   transition-colors duration-200 px-4 py-2 rounded-lg text-white"
          >
            Prev
          </li>

          {/* Pagination Items */}
          {arr.map((item, index) => (
            <li
              onClick={() => handleChange(item)}
              key={index}
              className={`cursor-pointer border border-white hover:bg-red-700  transition-colors duration-200 px-4 py-2 rounded-lg text-white ${
                activePage == item ? "bg-violet-700" : ""
              }`}
            >
              {item}
            </li>
          ))}

          {/* Next Button */}
          <li
            onClick={() => {
              const prevPage = page < totalPage ? page + 1 : totalPage;
              handleChange(prevPage);
            }}
            className="cursor-pointer border border-white hover:bg-red-700  transition-colors duration-200 px-4 py-2 rounded-lg text-white"
          >
            Next
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
