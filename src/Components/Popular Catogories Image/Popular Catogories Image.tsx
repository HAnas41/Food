// PopularCategoriesImages.tsx
import React from "react";
// Ensure correct path
import categories, { Category } from "@/utils/helpers/helpers";

interface PopularCategoriesImagesProps {
  filterPopular: boolean;
}

const PopularCategoriesImages: React.FC<PopularCategoriesImagesProps> = ({ filterPopular }) => {
  // Filter categories based on the filterPopular prop
  const filteredCategories: Category[] = filterPopular
    ? categories.filter((category: Category) => category.popular)
    : categories;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredCategories.map((category: Category, index: number) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-300"
        >
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-500 transition-colors">
            {category.title}
          </h3>
          <p className="text-sm text-gray-500 hover:text-green-500 transition-colors">
            {category.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PopularCategoriesImages;
