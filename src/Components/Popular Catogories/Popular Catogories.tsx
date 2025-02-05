"use client";
import React, { useState } from "react";
import PopularCategoriesImages from "../Popular Catogories Image/Popular Catogories Image";
import PopularCategoriesContent from "../Popular Catogories content/Popular Catogories Content";

export default function PopularCategories() {
  const [filterPopular, setFilterPopular] = useState<boolean>(true);

  // Toggle the filterPopular state
  const toggleFilter = () => {
    setFilterPopular(!filterPopular);
  };

  return (
    <section className="py-10 bg-gray-50 mt-5">
      <div className="max-w-6xl mx-auto text-center">
        <PopularCategoriesContent />
        {/* Button to toggle filter */}
        <button
          onClick={toggleFilter}
          className="mb-4 bg-green-500 text-white p-2 rounded"
        >
          {filterPopular ? "Show All Categories" : "Show Popular Categories"}
        </button>
        <PopularCategoriesImages filterPopular={filterPopular} />
      </div>
    </section>
  );
}
